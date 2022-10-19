import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AppBarContainer, AppBarHeader } from "../../styles/AppBarStyles";
import Actions from "../Actions/Actions";
import { ListItemButton } from "@mui/material";

const AppBarMobile = ({ isMobile }) => {
  return (
    <AppBarContainer>
      <ListItemButton>
        <MenuIcon />
      </ListItemButton>
      <AppBarHeader isMobile={isMobile}>My Header</AppBarHeader>
      <ListItemButton
        sx={{
          justifyContent: "end",
        }}
      >
        <SearchIcon />
      </ListItemButton>
      <Actions isMobile={isMobile} />
    </AppBarContainer>
  );
};

export default AppBarMobile;
