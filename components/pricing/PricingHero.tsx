"use client";

import { Box, Container, Typography } from "@mui/material";

export default function PricingHero() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          overflow: "hidden",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "20%",
            width: 300,
            height: 300,
            bgcolor: "primary.main",
            opacity: 0.1,
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: 400,
            height: 400,
            bgcolor: "secondary.main",
            opacity: 0.1,
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
      </Box>

      <Container maxWidth="md" sx={{ textAlign: "center", mb: 10 }}>
        <Typography
          className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50"
          variant="h2"
          component="h1"
          sx={{
            mb: 3,
          }}
        >
          Simple, Transparent
          <br />
          <Box
            component="span"
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Pricing
          </Box>
        </Typography>
        <Typography
          variant="h5"
          className="text-foreground/60"
          sx={{ maxWidth: 600, mx: "auto", mb: 4, lineHeight: 1.6 }}
        >
          Choose the plan that fits your team. No hidden fees, no surprises.
          Start with a 14-day free trial.
        </Typography>
      </Container>
    </>
  );
}
