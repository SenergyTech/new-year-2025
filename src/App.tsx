import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import { Box } from "@mui/material";

// import EventGuide from "./components/EventGuide";
import Header from "./components/Header";

function App() {
  const eventDate = new Date(2025, 11, 19, 18, 0, 0);

  return (
    <>
      {/* Use a main Box to ensure the page background covers everything,
        especially between components.
      */}
      <Box className=" gatsby-bg space-x-2 h-screen">
        <Header />
        <Hero eventDate={eventDate} />
        <LogoCarousel />
     
       
      </Box>
    </>
  );
}

export default App;
