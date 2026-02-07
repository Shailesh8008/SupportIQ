"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect on your next billing cycle.",
  },
  {
    q: "What happens if I exceed my ticket limit?",
    a: "We won't stop processing your tickets. We'll notify you when you reach 90% of your limit, and you can choose to upgrade or pay a small overage fee per additional ticket.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No, SupportIQ is billed monthly and you can cancel at any time. We also offer annual billing with a 20% discount.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes, all plans come with a 14-day free trial. No credit card is required to start testing SupportIQ.",
  },
];

export default function FaqSection() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" align="center" sx={{ mb: 6 }}>
        Frequently asked questions
      </Typography>
      <Box>
        {FAQ_DATA.map((faq, i) => (
          <Accordion key={i} disableGutters>
            <AccordionSummary
              expandIcon={<ChevronDown size={20} color="#a1a1aa" />}
              sx={{ px: 0 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <HelpCircle
                  size={18}
                  color="#3b82f6"
                  style={{ opacity: 0.5 }}
                />
                <Typography variant="subtitle1" fontWeight="medium">
                  {faq.q}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pl: 5.5 }}>
              <Typography color="text.secondary">{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
