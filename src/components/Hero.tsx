import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Countdown from "./Countdown";

export default function Hero({ eventDate }: { eventDate: Date }) {
  return (
    <Box
      sx={{
        color: "#FFD700",
        textShadow: "0 0 8px rgba(255, 215, 0, 0.5)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
      className="py-16 sm:py-24 text-center"
    >
      {/* Snow layer */}
      <div className="snowfall">
        <div className="layer l1"></div>
        <div className="layer l2"></div>
        <div className="layer l3"></div>
         <div className="layer l4"></div>
      </div>

      <Container className="" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontFamily: "'Cinzel Decorative', serif",
              letterSpacing: "2px",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "1000px",
            }}
          >
            Шинэ жилийн Тансаг Ёслол 2025
          </Typography>

          <Typography
            variant="h5"
            component="p"
            
            sx={{
              maxWidth: "500px",
              color: "#e8e8e8",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.6,
            }}

          >
            Хамтдаа шинэ жилийн баярыг угтан, тансаг оройн зоог, хөгжилтэй уур
            амьсгал дунд мартагдашгүй үдшийг өнгөрөөе.
          </Typography>

          <Box className="my-4 grid grid-cols-1">
            <Countdown to_date={eventDate} />
          </Box>

          <Button
            variant="contained"
            component="a"
            href="https://forms.office.com/r/77iw83zDMv"
            target="_blank"
            sx={{
              background: "linear-gradient(90deg, #FFD700, #FFA500)",
              color: "#000",
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              px: 4,
              py: 1.5,
              borderRadius: "9999px",
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
              },
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
