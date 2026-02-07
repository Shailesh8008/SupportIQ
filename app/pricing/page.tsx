"use client";

import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { pricingTheme } from "@/components/pricing/PricingTheme";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCard from "@/components/pricing/PricingCard";
import FaqSection from "@/components/pricing/FaqSection";

const PRICING_TIERS = [
  {
    title: "Starter",
    price: 15,
    description: "Perfect for small teams getting started.",
    features: [
      "Up to 1,000 tickets/mo",
      "Basic Feature Triage",
      "Email Support",
      "1 Team Member",
      "Standard Analytics",
    ],
    buttonText: "Start Free Trial",
    buttonLink: "/signup",
    highlighted: true,
    buttonVariant: "outlined" as const,
  },
  {
    title: "Pro",
    price: 50,
    description: "For growing teams that need powerfull tool.",
    features: [
      "Up to 5,000 tickets/mo",
      "Advanced AI Triage",
      "Priority Email Support",
      "5 Team Members",
      "Advanced Analytics",
      "Custom Tagging Rules",
      "API Access",
    ],
    buttonText: "Start Free Trial",
    buttonLink: "/signup",
    highlighted: false,
    buttonVariant: "outlined" as const,
  },
  {
    title: "Business",
    price: 110,
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited tickets",
      "Enterprise AI Models",
      "24/7 Dedicated Support",
      "Unlimited Team Members",
      "Custom Reporting",
      "SLA Guarantees",
      "SSO & Security Audit",
      "Onboarding Specialist",
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    highlighted: false,
    buttonVariant: "outlined" as const,
  },
];

export default function PricingPage() {
  return (
    <ThemeProvider theme={pricingTheme}>
      <Box sx={{ minHeight: "100vh", pb: 10, pt: { xs: 15, md: 20 } }}>
        <PricingHero />

        <Container maxWidth="lg" sx={{ mb: 15 }}>
          <Grid
            container
            spacing={6}
            alignItems="stretch"
            justifyContent={"center"}
          >
            {PRICING_TIERS.map((tier) => (
              <Grid item xs={12} md={4} key={tier.title}>
                <PricingCard {...tier} />
              </Grid>
            ))}
          </Grid>
        </Container>

        <FaqSection />
      </Box>
    </ThemeProvider>
  );
}
