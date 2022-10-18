import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBarContainer,
  AppBarHeader,
  AppBarList,
} from "../../styles/AppBarStyles";
import Actions from "../Actions/Actions";

const AppBarDesktop = ({ isMobile }) => {
  return (
    <AppBarContainer>
      <AppBarHeader>My Header</AppBarHeader>
      <AppBarList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Category" />
        <ListItemText primary="About" />
        <ListItemText primary="Contact" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </AppBarList>
      <Actions isMobile={isMobile} />
    </AppBarContainer>
  );
};

export default AppBarDesktop;
