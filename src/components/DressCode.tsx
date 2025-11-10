import { Box, Typography } from "@mui/material";
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";

export default function DressCodeSimple() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: 10,
        px: { xs: 3, md: 8 },
      }}
    >
      {/* --- Гарчиг --- */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            color: "secondary.main",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            textShadow:
              "0 0 1px rgba(255,215,0,0.4), 0 0 25px rgba(255,165,0,0.2)",
          }}
        >
          Дресс код: Great Gatsby
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            mt: 1,
          }}
        >
          “Roaring 20s”-ийн Америкийн мөрөөдөл
        </Typography>
      </Box>

      {/* --- Хоёр хуваасан хэсэг --- */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* --- Эрчүүдийн загвар --- */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            boxShadow: "0 0 5px rgba(255,215,0,0.3)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "secondary.main",
              mb: 2,
              fontWeight: 600,
            }}
          >
            Эрчүүд
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 2,
            }}
          >
            Смокинг, гурван хэсэгтэй костюм, федора малгай, зангиа эсвэл хантаазтай хослол.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 1.5,
            }}
          >
            {[men1, men2, men3, men4].map((src, i) => (
              <Box
                key={i}
                component="img"
                src={src}
                alt={`men-${i}`}
                sx={{
                  width: "100%",
                  height: 500,
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* --- Эмэгтэйчүүдийн загвар --- */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            boxShadow: "0 0 5px rgba(255,215,0,0.3)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "secondary.main",
              mb: 2,
              fontWeight: 600,
            }}
          >
            Эмэгтэйчүүд
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 2,
            }}
          >
            Флэппер даашинз, өдөн ороолт, урт бээлий, сувдан зүүлт, гялалзсан урт даашинз.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 1.5,
            }}
          >
            {[women1, women2, women3 , women4].map((src, i) => (
              <Box
                key={i}
                component="img"
                src={src}
                alt={`women-${i}`}
                sx={{
                  width: "100%",
                  height: 500,
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* --- Доод тайлбар --- */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: 8,
          color: "text.secondary",
          fontStyle: "italic",
        }}
      >
       
      </Typography>
    </Box>
  );
}
