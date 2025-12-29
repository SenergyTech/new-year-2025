"use client";
import { motion } from "framer-motion";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Countdown from "./Countdown";
import { useEffect, useRef } from "react";
import photo from "../assets/photos-preview.png";
export default function Hero({ eventDate }: { eventDate: Date }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* --- Zoom disable --- */
  useEffect(() => {
    const disableZoom = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault();
    };
    const disableKeyZoom = (e: KeyboardEvent) => {
      if (e.ctrlKey && ["+", "-", "=", "0"].includes(e.key)) e.preventDefault();
    };
    window.addEventListener("wheel", disableZoom, { passive: false });
    window.addEventListener("keydown", disableKeyZoom);
    return () => {
      window.removeEventListener("wheel", disableZoom);
      window.removeEventListener("keydown", disableKeyZoom);
    };
  }, []);

  /* --- Fireworks animation --- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let particles: any[] = [];
    let animationFrame: number;
    let running = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      color: string;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      opacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.color = `hsl(${40 + Math.random() * 40}, 100%, ${50 + Math.random() * 30}%)`;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1.2;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.life = 150 + Math.random() * 80;
        this.opacity = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += 0.03;
        this.size *= 0.98;
        this.life--;
        this.opacity -= 0.006;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const createFirework = (x: number, y: number) => {
      for (let i = 0; i < 100; i++) particles.push(new Particle(x, y));
    };

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw(ctx);
        if (p.life <= 0 || p.size < 0.5) particles.splice(i, 1);
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    const handleClick = (e: MouseEvent) => createFirework(e.clientX, e.clientY);
    window.addEventListener("click", handleClick);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* --- Add to Calendar (Outlook web only, no file download) --- */



  /* --- Hero Layout --- */
  return (
    <Box
      sx={{
        color: "#FFD700",
        textShadow: "0 0 8px rgba(255, 215, 0, 0.5)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
      className="mt-40 text-center mb-20"
    >
      {/* Golden Snowfall */}
      <div
        className="snowfall"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <div className="layer l1"></div>
        <div className="layer l2"></div>
        <div className="layer l3"></div>
        <div className="layer l4"></div>
      </div>

      {/* Fireworks Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Main Content */}
      <Container sx={{ position: "relative", zIndex: 3 }}>
        <Stack spacing={4} alignItems="center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 100,
                fontFamily: "'Monoton', cursive",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#FFD700",
                background:
                  "linear-gradient(90deg, #FFD700 0%, #FFB300 30%, #FFF7C0 50%, #FFD700 70%, #FFB300 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow:
                  "0 0 10px rgba(255,215,0,0.6), 0 0 20px rgba(255,165,0,0.4), 2px 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              24K Celebration

            </Typography>
          </motion.div>



          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
            <Box className="my-4 grid grid-cols-1">
              <Countdown to_date={eventDate} />
            </Box>
          </motion.div>

          {/* ✅ Зөвхөн "Зураг үзэх" (Google Photos link) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Stack
              spacing={2}
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                component="a"
                href="https://photos.app.goo.gl/GQnK52289M8NxWWU6"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  background: "linear-gradient(90deg, #000000, #1a1a1a)",
                  color: "#FFD700",
                  fontWeight: 800,
                  fontFamily: "'Inter', sans-serif",
                  px: 2.5,
                  py: 1.2,
                  borderRadius: "9999px",
                  border: "0.5px solid rgba(255, 215, 0, 0.6)",
                  boxShadow: "0 0 18px rgba(0, 0, 0, 0.55)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                  "&:hover": {
                    transform: "scale(1.06)",
                    background: "linear-gradient(90deg, #FFD700, #FFA500)",
                    color: "#000",
                    border: "0.5px solid #000",
                    boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={photo}
                  alt="Event photos"
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "100px",
                    mr: 1.4,
                    objectFit: "cover",
                    border: "1px solid rgba(255,215,0,0.35)",
                  }}
                />
                Зураг үзэх
                <Box component="span" sx={{ ml: 1, fontWeight: 900 }}>
                  ↗
                </Box>
              </Button>
            </Stack>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  );
}
