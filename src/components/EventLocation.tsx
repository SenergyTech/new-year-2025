import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  useTheme,
} from "@mui/material"; // 👈 Import useTheme
import MapIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarIcon from "@mui/icons-material/Event";

interface VenueSectionProps {
  // Optional prop to pass the specific date/time for display
  eventDate?: Date;
}

export default function EventLocation({
  eventDate: eventDateTime,
}: VenueSectionProps) {
  const theme = useTheme(); // 👈 Access the Gatsby theme

  // Example Venue Details
  const venue = {
    name: "King Ballroom",
    addressLine1: "Mahatma Gandhi St",
    addressLine2: "HUD - 15 khoroo, Ulaanbaatar 17011",
    mapLink: "https://maps.app.goo.gl/LRn4WywdKQPBKgz36",
  };

  const mapIframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.2253036407174!2d106.9144616768891!3d47.90374607121858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969300519532ad%3A0xeb3acf4c546e6bd8!2sKing%20Ballroom!5e1!3m2!1sen!2smn!4v1762323869203!5m2!1sen!2smn";

  // Format the date for display
  const formattedTime = eventDateTime
    ? eventDateTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "6:00 PM";

  const formattedDate = eventDateTime
    ? eventDateTime.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Friday, December 19, 2025";

  return (
    <Box
      component="section"
      className="px-10 py-10"
      // Use theme's default background and text colors
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
          Event Location
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          className="items-center md:items-stretch"
        >
          {/* LEFT COLUMN: Venue Info & Details - Styled as a Gatsby Panel */}
          <Box
            className=" p-6 rounded-sm shadow-xl"
            sx={{
              // Use background.paper and custom border/shadow for Gatsby look
              bgcolor: "background.paper",
              borderLeft: `4px solid ${theme.palette.secondary.main}`, // Gold accent bar
              border: theme.deco.panelBorder, // Gold border on all sides
              boxShadow: theme.shadows[12], // Prominent shadow
              borderRadius: 4, // Theme's radius
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="h4"
                component="h3"
                className="font-semibold"
                // Venue name color is secondary gold
                sx={{ color: "secondary.main" }}
              >
                {venue.name}
              </Typography>
              {/* Date, Time, and Address blocks are now styled with theme colors */}
              <Stack direction="row" spacing={2} alignItems="center">
                <CalendarIcon color="primary" /> {/* Gold icon */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", fontWeight: 500 }}
                  >
                    {formattedDate}
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <ScheduleIcon color="primary" /> {/* Gold icon */}
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", fontWeight: 500 }}
                  >
                    Doors Open at {formattedTime}
                  </Typography>
                </Box>
              </Stack>

              {/* Address */}
              <Stack direction="row" spacing={2} >
                <MapIcon color="primary" sx={{ mt: 0.5 }} /> {/* Gold icon */}
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

              {/* Directions Button */}
              <Button
                variant="contained"
                color="primary" // Button styling is handled by MuiButton overrides in theme.ts
                size="large"
                startIcon={<DirectionsIcon />}
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start"
              >
                Get Directions
              </Button>
            </Stack>
          </Box>

          {/* RIGHT COLUMN: Map Iframe Container - Styled as a luxurious frame */}
          <Box
            className="  md:h-auto rounded-md overflow-hidden shadow-2xl"
            sx={{
              // Frame the map with the theme's border and shadow
              border: theme.deco.panelBorder,
              boxShadow: theme.shadows[12],
              borderRadius: 4,
            }}
          >
            <Box className="w-full h-full">
              <iframe
                src={mapIframeSrc}
                className="w-full h-full border-0"
                loading="lazy"
                title="Event Venue Map"
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
