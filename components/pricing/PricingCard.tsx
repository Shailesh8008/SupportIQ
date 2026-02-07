"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Check } from "lucide-react";
import Currency from "./Currency";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
  buttonVariant?: "contained" | "outlined";
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
  buttonVariant = "outlined",
}: PricingCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: "330px",
        display: "flex",
        flexDirection: "column",
        p: 2,
        ...(highlighted
          ? {
              position: "relative",
              borderColor: "primary.main",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.15)",
              bgcolor: "var(--active-card)",
              transform: { md: "scale(1.05)" },
              zIndex: 1,
              overflow: "visible",
            }
          : {
              bgcolor: "var(--card)",
              backdropFilter: "blur(10px)",

              "&:hover": { borderColor: "secondary.main" },
              transition: "border-color 0.3s",
            }),
      }}
    >
      {highlighted && (
        <Chip
          label="Most Popular"
          color="primary"
          size="medium"
          sx={{
            position: "absolute",
            top: -16,
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: "bold",
            cursor: "default",
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom className="text-foreground">
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "baseline", mb: 2 }}>
          <Typography variant="h3" component="span" fontWeight="bold" className="text-foreground">
            <Currency
              locale={navigator.language}
              width={40}
              height={40}
              rate={true}
              price={price}
            />
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
            /month
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          {description}
        </Typography>

        <List>
          {features.map((feature) => (
            <ListItem key={feature} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Check size={18} color="#3b82f6" />
              </ListItemIcon>
              <ListItemText primary={feature} className="text-foreground" />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Button
        variant={buttonVariant}
        fullWidth
        sx={{
          mt: 2,
          ...(highlighted && {
            background: "linear-gradient(to right, #2563eb, #9333ea)",
            color: "white",
            "&:hover": {
              background: "linear-gradient(to right, #2563eb, #9333ea)",
            },
          }),
        }}
        href={buttonLink}
      >
        {buttonText}
      </Button>
    </Card>
  );
}
