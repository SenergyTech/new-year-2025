import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import { Box } from "@mui/material";
import EventLocation from "./components/EventLocation";
import DressCode from "./components/DressCode";
// import EventGuide from "./components/EventGuide";
import Header from "./components/Header";

function App() {
  const eventDate = new Date(2025, 11, 19, 17, 30, 0);

  return (
    <>
      {/* Use a main Box to ensure the page background covers everything,
        especially between components.
      */}
      <Box className="min-h-screen gatsby-bg">
        <Header />
        <Hero eventDate={eventDate} />
        <LogoCarousel />
        {/* You can add more sections here */}
        <EventLocation eventDate={eventDate} />
        <DressCode />
        {/* <EventGuide /> */}
      </Box>
    </>
  );
}

export default App;
