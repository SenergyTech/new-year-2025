import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material"; // 👈 Import useTheme

// --- Interfaces ---

interface CountdownProps {
  /** The future date and time to count down to. */
  to_date: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
}

// --- Helper Functions ---

/**
 * A pure function to calculate the time remaining.
 */
const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();

  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isRunning: true,
    };
  }
  return timeLeft;
};

/**
 * Pads a number with a leading zero if it's less than 10.
 */
const pad = (num: number): string => num.toString().padStart(2, "0");

// --- Main Component ---

const Countdown: React.FC<CountdownProps> = ({ to_date }) => {
  const theme = useTheme(); // 👈 Access the Gatsby theme
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(to_date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(to_date));
    }, 1000);

    // Cleanup interval on component unmount or prop change
    return () => clearInterval(timer);
  }, [to_date]);

  const { days, hours, minutes, seconds, isRunning } = timeLeft;

  // Render a single "time block" (e.g., "12 Days")
  const renderTimeBlock = (label: string, value: string | number) => (
    <Box
      className="
        flex flex-col items-center justify-center 
        w-24 h-24 sm:w-28 sm:h-28 
        transition-transform duration-300 hover:scale-[1.03]
      "
      // 🚨 Apply Gatsby Theme Styling
      sx={{
        bgcolor: "background.paper", // Use rich inkPaper
        border: theme.deco.panelBorder, // Gold accent border
        boxShadow: theme.shadows[10], // Strong shadow for depth
        borderRadius: 2, // Theme's shape radius
      }}
    >
      <Typography
        variant="h3"
        component="div"
        // Use monospace font (if defined in theme) and Gatsby gold for numbers

        className=" font-extrabold font-serif hover:shadow-xl"
        sx={{
          color: "primary.main",
          fontSize: { xs: "1.5rem", sm: "2.5rem" },
        
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="overline"
        component="div"
        // Use secondary text color for the label
        sx={{ color: "text.secondary", lineHeight: 1 }}
      >
        {label}
      </Typography>
    </Box>
  );

  // Show a "Finished" message if the countdown is over
  if (!isRunning) {
    return (
      <Typography
        variant="h4"
        className="text-center font-bold"
        // Use a gold accent for the finished message
        sx={{ color: "primary.main" }}
      >
        🎉 Шинэ жилийн арга хэмжээнд оролцсон  хүмүүсдээ баярлалаа 🎉
      </Typography>
    );
  }

  // Render the countdown timer
  return (
 <Box
  className="grid justify-center gap-4"
  sx={{
    
    gridTemplateColumns: {
      xs: "repeat(2, minmax(100px, 1fr))", // phone дээр 2 багана
      sm: "repeat(4, minmax(100px, 1fr))", // том дэлгэц дээр 4 багана
    },
  }}
>
  {renderTimeBlock("Өдөр", days)}
  {renderTimeBlock("Цаг", pad(hours))}
  {renderTimeBlock("Минут", pad(minutes))}
  {renderTimeBlock("Секунд", pad(seconds))}
</Box>
  );
};

export default Countdown;
