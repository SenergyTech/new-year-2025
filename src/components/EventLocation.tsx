import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  useTheme,
} from "@mui/material";
import MapIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarIcon from "@mui/icons-material/Event";

interface VenueSectionProps {
  eventDate?: Date;
}

export default function EventLocation({
  eventDate: eventDateTime,
}: VenueSectionProps) {
  const theme = useTheme();

  // Жишээ байршлын мэдээлэл
  const venue = {
    name: "King Ballroom",
    addressLine1: "Махатма Гандигийн гудамж",
    addressLine2: "ХУД - 15-р хороо, Улаанбаатар 17011",
    mapLink: "https://maps.app.goo.gl/LRn4WywdKQPBKgz36",
  };

  const mapIframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.2253036407174!2d106.9144616768891!3d47.90374607121858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969300519532ad%3A0xeb3acf4c546e6bd8!2sKing%20Ballroom!5e1!3m2!1sen!2smn!4v1762323869203!5m2!1sen!2smn";

  const formattedTime = eventDateTime
    ? eventDateTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "18:00";

  const formattedDate = eventDateTime
    ? eventDateTime.toLocaleDateString("mn-MN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "2025 оны 12-р сарын 19, Баасан гараг";

  return (
    <Box
      component="section"
      className="px-10 py-10"
      sx={{ bgcolor: "primary.main" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          className="text-center font-bold mb-12"
          sx={{ color: "primary.contrastText" }}
        >
           Байршил
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          className="items-center lg:items-stretch lg:p-10 lg:justify-center"
        >
          {/* Зүүн багана: Мэдээлэл */}
          <Box
            className="lg:w-1/2 lg:py-10 lg:px-10 p-6 rounded-sm shadow-xl"
            sx={{
              bgcolor: "background.paper",
              borderLeft: `4px solid ${theme.palette.secondary.main}`,
              border: theme.deco.panelBorder,
              boxShadow: theme.shadows[12],
              borderRadius: 4,
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="h4"
                component="h3"
                className="font-semibold"
                sx={{ color: "secondary.main" }}
              >
                {venue.name}
              </Typography>

              {/* Огноо */}
              <Stack direction="row" spacing={2} alignItems="center">
                <CalendarIcon color="primary" />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", fontWeight: 500 }}
                  >
                    {formattedDate}
                  </Typography>
                </Box>
              </Stack>

              {/* Цаг */}
              <Stack direction="row" spacing={2} alignItems="center">
                <ScheduleIcon color="primary" />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", fontWeight: 500 }}
                  >
                    Хаалга нээгдэх цаг: {formattedTime}
                  </Typography>
                </Box>
              </Stack>

              {/* Хаяг */}
              <Stack direction="row" spacing={2}>
                <MapIcon color="primary" sx={{ mt: 0.5 }} />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", fontWeight: 500 }}
                  >
                    {venue.addressLine1}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {venue.addressLine2}
                  </Typography>
                </Box>
              </Stack>

              {/* Зам заалгах товч */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<DirectionsIcon />}
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start"
              >
                Зам заалгах
              </Button>
            </Stack>
          </Box>

          {/* Баруун багана: Газрын зураг */}
          <Box
            className="lg:w-1/2 md:h-auto rounded-md overflow-hidden shadow-2xl"
            sx={{
              border: theme.deco.panelBorder,
              boxShadow: theme.shadows[12],
              borderRadius: 4,
            }}
          >
            <Box className="w-full h-full bg-black p-4">
              <iframe
                src={mapIframeSrc}
                className="w-full h-full shadow-md shadow-gray-500 rounded-4xl"
                loading="lazy"
                title="Үйл ажиллагаа болох газрын зураг"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
