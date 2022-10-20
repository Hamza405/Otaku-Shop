import { styled, Box, Typography } from "@mui/material";
import { Colors } from "./theme";

export const PromotionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  background: Colors.secondary,
  padding: "20px 0 20px 0",
  [theme.breakpoints.up("md")]: {
    padding: "30px 0 30px 0",
  },
}));

export const PromotionMessage = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montez", "cursive"',
  color: Colors.white,
  fontSize: "1.5em",
  [theme.breakpoints.up("md")]: {
    fontSize: "3em",
  },
}));
