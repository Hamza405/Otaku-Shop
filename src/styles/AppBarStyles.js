import { styled, Box, Typography, List } from "@mui/material";
import { Colors } from "./theme/index";
import "@fontsource/montez";

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppBarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

export const AppBarList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 3,
}));
