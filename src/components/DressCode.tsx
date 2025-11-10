import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import LocalBarIcon from "@mui/icons-material/LocalBar";

export default function DressCode() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      className="py-16 px-10"
      sx={{
        bgcolor: "background.default",
        position: "relative",
      }}
    >
      {/* --- Гарчиг хэсэг --- */}
      <Box className="text-center mb-10">
        <Typography
          variant="h3"
          component="h2"
          className="font-bold tracking-wide mb-3"
          sx={{
            color: "secondary.main",
            fontSize: { xs: "2.25rem", md: "3rem" },
            textShadow:
              "0 0 1px rgba(255, 215, 0, 0.4), 0 0 25px rgba(255, 165, 0, 0.2)",
          }}
        >
          Дресс код: Great Gatsby
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            letterSpacing: "0.5px",
          }}
        >
          “Roaring 20s”-ийн Америкийн мөрөөдөл
        </Typography>
      </Box>

      {/* --- Дресс кодын панель --- */}
      <Box
        className="w-full mx-auto max-w-5xl mb-5 p-8 shadow-md"
        sx={{
          bgcolor: "background.paper",
          
         
          boxShadow:
            "0 0 5px rgba(255, 215, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)",
          borderRadius: 2,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: 2,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
            pointerEvents: "none",
          },
        }}
      >
        <List disablePadding>
          {/* Эрчүүдийн хувцаслалт */}
          <ListItem
            disableGutters
            sx={{
              mb: 3,
              borderBottom: `1px solid ${theme.palette.divider}`,
              pb: 2,
            }}
          >
            <ListItemIcon>
              <LocalBarIcon
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: 36,
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Эрчүүдэд"
              secondary="Смокинг, гурван хэсэгтэй костюм, федора малгай, зангиа эсвэл хантаазтай хослол."
              sx={{
                "& .MuiListItemText-primary": {
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                },
                "& .MuiListItemText-secondary": {
                  color: theme.palette.text.secondary,
                  mt: 0.5,
                  lineHeight: 1.6,
                },
              }}
            />
          </ListItem>

          {/* Хатагтай нарын хувцаслалт */}
          <ListItem disableGutters>
            <ListItemIcon>
              <DiamondIcon
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: 36,
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Хатагтай нартаа"
              secondary="Флэппер даашинз (fringe чимэглэлтэй), өдөн ороолт, урт бээлий, сувдан зүүлт, эсвэл гялалзсан гоёлтой урт даашинз."
              sx={{
                "& .MuiListItemText-primary": {
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                },
                "& .MuiListItemText-secondary": {
                  color: theme.palette.text.secondary,
                  mt: 0.5,
                  lineHeight: 1.6,
                },
              }}
            />
          </ListItem>
        </List>
      </Box>

      {/* --- Доод тайлбар / чимэглэл --- */}
      <Typography
        variant="body2"
        className="text-center mt-8"
        sx={{
          color: "text.secondary",
          fontStyle: "italic",
          letterSpacing: "0.3px",
        }}
      >
        Тансаг, дэгжин, гялалзсан — 1920-иод оны уур амьсгалыг сэргээе ✨
      </Typography>
    </Box>
  );
}
