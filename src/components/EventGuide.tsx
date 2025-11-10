import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
  Divider,
} from "@mui/material";


export default function EventGuide() {
  const theme = useTheme();

  // --- Мета мэдээлэл (зоригоороо өөрчилж болно) ---
  const eventMeta = {
    dateLabel: "19 DECEMBER 2025",
    timeRange: "17:30 AM – 00:00 PM",
    venue: "KING BALLROOM",
    address: "ХУД - 15-р хороо, Улаанбаатар 17011",
  };

  // --- Хуваарь ---
  const schedule: { time: string; title: string }[] = [
    { time: "17:30 AM", title: "Opening Ceremony" },
    { time: "18:00 AM", title: "Presentation Session" },
    { time: "19:00 AM", title: "Panel Discussion" },
    { time: "20:00 PM", title: "Interactive Workshops" },
    { time: "21:00 PM", title: "Networking Lunch" },
    { time: "22:00 PM", title: "Design Showcase and Portfolio Reviews" },
    { time: "23:00 PM", title: "Panel Discussion" },
    { time: "24:00 PM", title: "Closing and Awards Ceremony" },
  ];

  // “шар pill” өнгө (зөвхөн rgba)
  const pillBg = theme.palette.mode === "dark"
    ? "rgba(255, 250, 170, 0.95)"
    : "rgba(255, 246, 138, 1)"; // #FFF68A-той төстэй

  // панелийн хүрээ (rgba)
  const panelBorder = "1px solid rgba(212, 175, 55, 0.35)"; // #D4AF37 @ 35%

  // алтлаг градиент (зөвхөн linear-gradient + hex)
  const goldGradient = "linear-gradient(90deg,#FFD700,#FFA500,#FFD700)";

  return (
    <Box
      component="section"
      className="py-16 px-10"
      sx={{ bgcolor: "background.default" }}
    >
      {/* --- Гарчиг --- */}
      <Box className="text-center mb-8">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: "secondary.main",
            fontWeight: 800,
            fontSize: { xs: "2.25rem", md: "3rem" },
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            textShadow:
              "0 0 10px rgba(255,215,0,0.35), 0 0 20px rgba(255,165,0,0.2)",
          }}
        >

          Үйл ажиллагаа
        </Typography>

        <Box
          sx={{
            mt: 2,
            mx: "auto",
            width: 220,
            height: 4,
            borderRadius: 999,
            backgroundImage: goldGradient,
            boxShadow: "0 0 12px rgba(255,215,0,0.45)",
          }}
        />
      </Box>

      {/* --- Дээд мэдээллийн 2 карт --- */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        className="mx-auto mb-6"
        sx={{ maxWidth: 1000 }}
      >
        <Box
          sx={{
            flex: 1,
            p: 2.5,
            bgcolor: "background.paper",
            border: panelBorder,
            borderRadius: 2,
            boxShadow: theme.shadows[2],
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            {eventMeta.dateLabel.toUpperCase()}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            {eventMeta.timeRange}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 2.5,
            bgcolor: "background.paper",
            border: panelBorder,
            borderRadius: 2,
            boxShadow: theme.shadows[2],
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            {eventMeta.venue.toUpperCase()}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            {eventMeta.address}
          </Typography>
        </Box>
      </Stack>

      {/* --- Цагийн хуваарийн ЛИСТ --- */}
      <Box
        className="w-full mx-auto"
        sx={{
          maxWidth: 1000,
          bgcolor: "background.paper",
          border: panelBorder,
          borderRadius: 2,
          boxShadow: theme.shadows[12],
          p: { xs: 1, sm: 2 },
        }}
      >
        <List disablePadding>
          {schedule.map((item, i) => (
            <Box key={`${item.time}-${i}`}>
              <ListItem
                sx={{
                  py: 1,
                  px: { xs: 1, sm: 1.5 },
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
                  gap: { xs: 1, sm: 2 },
                  alignItems: "center",
                }}
              >
                {/* TIME PILL */}
                <Chip
                  label={item.time.toUpperCase()}
                  sx={{
                    justifySelf: { xs: "stretch", sm: "start" },
                    borderRadius: 2,
                    height: 40,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    bgcolor: pillBg,
                    color: "#111111",
                    boxShadow:
                      "0 1px 0 rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.35)",
                    "& .MuiChip-label": { px: 2 },
                  }}
                />

                {/* TITLE CELL */}
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        lineHeight: 1.4,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        px: 2,
                        py: 1.25,
                        backgroundColor: "transparent",
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                  sx={{ m: 0 }}
                />
              </ListItem>

              {i < schedule.length - 1 && (
                <Divider component="li" sx={{ opacity: 0.4 }} />
              )}
            </Box>
          ))}
        </List>
      </Box>

      {/* Доод тэмдэглэл */}
      <Typography
        variant="caption"
        className="text-center block mt-8"
        sx={{ color: "text.secondary" }}
      >
        * Хуваарьт бага зэрэг өөрчлөлт гарах боломжтой. Танхимын зар, чиглүүлгийг
        дагана уу.
      </Typography>
    </Box>
  );
}
