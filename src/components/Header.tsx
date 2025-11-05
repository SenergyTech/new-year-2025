import mmseGreenBuildingLogo from "../assets/MMS Green Building Logo.png";
import { Box } from "@mui/material";

export default function Header() {
  const logoClass = "h-12 w-auto object-contain mx-2 sm:h-16";

  return (
    <Box
      className="flex justify-center items-center py-4 relative"
      sx={{
        bgcolor: "background.primary", // Use theme's paper background for the header
        color: "text.primary",
      }}
    >
      {/* Main logo container */}
      <Box className="flex justify-center items-center">
        <img
          src={mmseGreenBuildingLogo}
          alt="MMS Green Building Logo"
          className={`${logoClass}`}
        />
      </Box>
    </Box>
  );
}
