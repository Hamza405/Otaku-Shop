import {
  styled,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Colors } from "./theme/index";
import "@fontsource/montez";

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppBarHeader = styled(Typography)(({ isMobile }) => ({
  padding: "4px",
  textAlign: isMobile && "center",
  flexGrow: 1,
  fontSize: isMobile ? "3em" : "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

export const AppBarList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 3,
}));

export const ActionItemButton = styled(ListItemButton)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionItemIcon = styled(ListItemIcon)(({ isMobile }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: isMobile && Colors.secondary,
}));

export const ActionContainerMobile = styled(Box)(() => ({
  margin: 0,
  display: "flex",
  backgroundColor: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  border: `1px solid ${Colors.border}`,
}));

export const ActionContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
