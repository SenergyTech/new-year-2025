import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme, // 👈 Import useTheme
} from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import LocalBarIcon from "@mui/icons-material/LocalBar";

export default function DressCode() {
  const theme = useTheme(); // Access the Gatsby theme

  return (
    <Box
      component="section"
      className="py-12" // Increased vertical padding for more space
      // Use MUI background.default to match the body gradient/color
      sx={{ bgcolor: "background.default" }}
    >
      {/* NOTE: The "Essential Event Information" title is likely handled in the 
        parent component (EventInformation.tsx) if this DressCode is a child. 
        I've commented it out here to avoid duplication if it's nested.
      */}
      <Box className="text-center py-5">
        <Typography
          variant="h3"
          component="h2"
          className=" text-center font-semibold mb-4 "
          sx={{ color: "secondary.main" }}
        >
          Dress Code: Great Gatsby
        </Typography>

        <Typography
          variant="body1"
          className="mb-4"
          sx={{ color: "secondary.main" }}
        >
          American Dream of Roaring 20s
        </Typography>
      </Box>

      {/* DRESS CODE PANEL (Styled with MUI Paper/Card properties) */}
      <Box
        // Remove bg-white/dark:bg-gray-800 Tailwind classes
        className="w-full px-6 py-3 shadow-xl"
        sx={{
          // Use background.paper, border, and boxShadow defined in theme.ts for MuiPaper
          bgcolor: "background.paper",
          border: theme.deco.panelBorder,
          boxShadow: theme.shadows[12], // Use a more prominent shadow
          borderRadius: 4, // Ensures theme's shape.borderRadius is used (12px by default)
        }}
      >
        <List disablePadding>
          <ListItem disableGutters>
            <ListItemIcon>
              {/* Use primary gold color for the accent icons */}
              <LocalBarIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="For Gentlemen"
              secondary="Tuxedos, three-piece suits, fedoras, bow ties, or vests."
              // The explicit text.primary/secondary fix remains critical for dark mode
              sx={{
                "& .MuiListItemText-primary": { color: "text.primary" },
                "& .MuiListItemText-secondary": { color: "text.secondary" },
              }}
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <DiamondIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="For Ladies"
              secondary="Flapper dresses (fringe!), feather boas, long gloves, pearl necklaces, or sleek, beaded gowns."
              sx={{
                "& .MuiListItemText-primary": { color: "text.primary" },
                "& .MuiListItemText-secondary": { color: "text.secondary" },
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
