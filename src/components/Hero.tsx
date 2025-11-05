import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Countdown from "./Countdown"; // Assuming Countdown.tsx is in the same folder

export default function Hero({ eventDate }: { eventDate: Date }) {
  return (
    <Box
      sx={{
        bgcolor: "primary.main", // Use theme's primary color
        color: "primary.contrastText", // Use theme's contrast text for readability
      }}
      // Use Tailwind for responsive padding and text alignment
      className="py-16 sm:py-24 text-center"
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography variant="h2" component="h1">
            The Countdown to 2026 Begins!
          </Typography>

          <Typography variant="h5" component="p" className="max-w-xl">
            Join us for an unforgettable evening of celebration, fine dining,
            and entertainment as we ring in the new year together.
          </Typography>

          {/* Add a wrapper for spacing, as the countdown has its own layout */}
          <Box className="my-4">
            <Countdown to_date={eventDate} />
          </Box>

          <Button
            variant="contained"
            component="a"
            href="https://forms.office.com/r/77iw83zDMv"
            target="_blank"
            color="primary" // Use secondary color to stand out
            size="large"
            // Add a subtle hover effect with Tailwind
            className="transform transition-transform hover:scale-105"
          >
            RSVP Now
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
