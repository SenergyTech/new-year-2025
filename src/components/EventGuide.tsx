import { Box, Typography, useTheme } from "@mui/material"; // 👈 Use Box and import useTheme
import MapIcon from "@mui/icons-material/Map";

export default function EventGuide() {
  const theme = useTheme(); // Access the Gatsby theme

  return (
    // Use Box as the primary container, removing the unnecessary Stack
    <Box>
      {/* VENUE GUIDE PANEL - Styled as a Gatsby Panel */}
      <Box
        // Remove generic bg-white/dark-bg-gray-800 classes
        className=" p-6 rounded-lg shadow-xl mx-10 mb-10"
        sx={{
          // Apply Gatsby Paper styling: rich dark background, gold border, deep shadow
          bgcolor: "background.paper",
          border: theme.deco.panelBorder,
          boxShadow: theme.shadows[12],
          borderRadius: 4, // Theme's radius
        }}
      >
        {/* Title: Venue Guide & Flow */}
        <Typography
          variant="h4"
          component="h3"
          className="font-semibold mb-4 flex items-center"
          // Use theme's secondary gold color for the heading
          sx={{ color: "secondary.main" }}
        >
          <MapIcon className="mr-2" color="primary" />{" "}
          {/* Use primary gold for icon */}
          Venue Guide & Flow
        </Typography>

        {/* Map Placeholder Container - Styled as a Frame */}
        <Box
          className="w-full h-96 overflow-hidden rounded-lg shadow-inner"
          sx={{
            // Frame the inner map placeholder with a subtle gold border
            border: theme.deco.panelBorder,
          }}
        >
          {/* Inner Placeholder Content */}
          <Box
            className="w-full h-full flex flex-col items-center justify-center p-4"
            sx={{
              // Use a slightly darker background (ink) for contrast against the paper
              bgcolor: "background.default",
            }}
          >
            <Typography
              variant="h6"
              className="font-bold mb-2"
              sx={{ color: "text.primary" }} // Ivory text
            >
              Detailed Venue Map Placeholder
            </Typography>
            <Typography
              variant="body2"
              className="text-center"
              sx={{ color: "text.secondary" }} // Secondary ivory text
            >
              This image will show the path for guests: <br />
              **Entrance → Coat Check/Registration → Reception Hall → Ballroom**
            </Typography>

            {/* Dummy Image for the map flow - Styled with Gold/Ink */}
            <Box
              className="mt-4 w-4/5 h-16 rounded-full flex items-center justify-around p-2"
              sx={{
                // Use a gold gradient or a solid primary color for the flow visual
                backgroundImage: theme.deco.goldGradient,
                boxShadow: theme.shadows[5],
              }}
            >
              <Typography
                className="text-xs"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                Entry
              </Typography>
              <Typography
                className="text-xs"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                Coat Check
              </Typography>
              <Typography
                className="text-xs"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                Reception
              </Typography>
              <Typography
                className="text-xs"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                Ballroom
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
