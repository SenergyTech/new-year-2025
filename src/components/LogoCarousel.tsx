import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // 👈 Import useTheme to access custom deco
import avandraLogo from "../assets/Avandra logo 2.png";
import beeLogo from "../assets/Bee logo.png";
import cleanEarthLogo from "../assets/Clean Earth logo 2.png";
import emcLogo from "../assets/EMC logo.png";
import ggtLogo from "../assets/GGT logo.png";
import mmsLogo from "../assets/MMS logo.png";
import mmseLogo from "../assets/MMSE logo.png";
import rjemLogo from "../assets/RJEM logo.png";

const logos = [
  avandraLogo,
  beeLogo,
  cleanEarthLogo,
  emcLogo,
  ggtLogo,
  mmsLogo,
  mmseLogo,
  rjemLogo,
];

export default function LogoCarousel() {
  const theme = useTheme(); // Access the custom theme
  const items = [...logos, ...logos];

  // Tailwinds' 'bg-gray-950' is close to 'ink', but we'll ensure consistency with MUI's background.default
  // We'll use the 'inkPaper' color for the logo tiles, styled with 'paper' components in theme.ts.

  return (
    <Box
      component="section"
      className="w-full py-12"
      // Use MUI background.default to match the body gradient/color
      sx={{ bgcolor: "background.default" }}
    >
      {/* OUTER: hides overflow */}
      {/* Use the custom hairline/divider style for a subtle frame */}
      <Box
        className="overflow-hidden"
        sx={{ borderColor: theme.palette.divider }}
      >
        {/* TRACK: inline-flex + no wrap + the animation */}
        <Box className="inline-flex whitespace-nowrap animate-scroll">
          {items.map((logo, i) => (
            <Box
              key={i}
              className="
                mx-8 h-24 w-40 
                flex items-center justify-center 
                  hover:grayscale-0 hover:opacity-100
                transition-all duration-300
              "
              // 🚨 Apply Gatsby Theme Styling via SX
              sx={{
                // Use background.paper and border styles defined for MuiPaper/MuiCard
                bgcolor: "background.paper",
                borderRadius: 2, // Use theme's shape radius (12px)
                border: theme.deco.panelBorder,
                boxShadow: theme.shadows[10], // Apply a noticeable shadow (customize index if needed)
              }}
            >
              <img
                src={logo}
                alt={`Company Logo ${i + 1}`}
                className="
                  max-h-full max-w-full 
                  object-contain 
                  p-4 
                  // 🚨 Enhance logo brightness for better visibility against dark paper
                  filter brightness-125
                "
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
