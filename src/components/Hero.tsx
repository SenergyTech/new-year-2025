"use client";
import { motion } from "framer-motion";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Countdown from "./Countdown";
import { useEffect, useRef } from "react";

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
  const handleAddToCalendar = () => {
    const title = "24K Celebration — New Year Party";
    const description =
      "Тансаг оройн зоог, хөгжилтэй уур амьсгал дунд мартагдашгүй үдшийг хамтдаа. Дресскод: 24K Gatsby ✨";
    const location = "King Ballroom, 4th floor";

    // Эвентийн хугацаа: prop-аас эхлэх, +3 цаг үргэлжилнэ (хүсвэл өөрчил)
    const startLocal = new Date(eventDate);
    const endLocal = new Date(startLocal.getTime() + 3 * 60 * 60 * 1000);

    const startForLink = toLocalISOForOutlook(startLocal); // YYYY-MM-DDTHH:mm:ss
    const endForLink = toLocalISOForOutlook(endLocal);

    const params = new URLSearchParams({
      path: "/calendar/action/compose",
      rru: "addevent",
      subject: title,
      startdt: startForLink,
      enddt: endForLink,
      allday: "false",
      location,
      body: description,
    }).toString();

    // Work/School (office.com) эхэлж нээгээд, бүтэхгүй бол consumer (live.com) руу унагана
    window.open(`https://outlook.office.com/calendar/0/deeplink/compose?${params}`, "_blank", "noopener,noreferrer") ||
      window.open(`https://outlook.live.com/calendar/0/deeplink/compose?${params}`, "_blank", "noopener,noreferrer");
  };

  function pad(n: number) {
    return n.toString().padStart(2, "0");
  }
  function toLocalISOForOutlook(d: Date) {
    // Outlook deeplink ихэнхдээ timezone-гүй ISO-г хэрэглэгчийн локал гэж ойлгоно
    const yyyy = d.getFullYear();
    const MM = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const HH = pad(d.getHours());
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    return `${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`;
  }

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
      className="mt-10 text-center"
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
              Happy New Year
              <br />
              2026
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 0.3 }}>
            <Typography
              variant="h5"
              sx={{
                maxWidth: "500px",
                color: "#e8e8e8",
                fontFamily: "'Metropolis1920', serif",
                lineHeight: 1.4,
                px: 2,
              }}
            >
              Хамтдаа шинэ жилийн баярыг угтан, тансаг оройн зоог, хөгжилтэй уур амьсгал дунд мартагдашгүй үдшийг өнгөрөөе.
            </Typography>
          </motion.div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
            <Box className="my-4 grid grid-cols-1">
              <Countdown to_date={eventDate} />
            </Box>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}>
            <Button
              variant="contained"
              component="a"
              href="https://forms.office.com/r/77iw83zDMv"
              target="_blank"
              sx={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(90deg, #FFD700, #FFA500)",
                color: "#000",
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                px: 4,
                py: 1.5,
                borderRadius: "9999px",
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                marginBottom: 4,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.06)",
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.1) 100%)",
                    animation: "shimmer 1.5s forwards",
                  },
                },
                "@keyframes shimmer": {
                  "0%": { left: "-100%" },
                  "100%": { left: "100%" },
                },
              }}
            >
              Бүртгүүлэх
            </Button>

            {/* ==== Календарт нэмэх ==== */}
            <Button
              variant="contained"
              onClick={handleAddToCalendar}
              sx={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(90deg, #FFD600, #FFA500)",
                color: "#fff",
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                px: 4,
                py: 1.5,
                ml: 2,
                borderRadius: "9999px",
                boxShadow: "0 0 20px rgba(255, 15, 0, 0.4)",
                mb: 4,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.06)",
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,25,0.6) 50%, rgba(255,255,255,0.1) 100%)",
                    animation: "shimmer 1.5s forwards",
                  },
                },
                "@keyframes shimmer": {
                  "0%": { left: "-100%" },
                  "100%": { left: "100%" },
                },
              }}
            >
              Календарт нэмэх
            </Button>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}
