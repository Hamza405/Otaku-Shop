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

export const ItemButton = styled(ListItemButton)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ItemIcon = styled(ListItemIcon)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionContainerMobile = styled(Box)(() => ({
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
