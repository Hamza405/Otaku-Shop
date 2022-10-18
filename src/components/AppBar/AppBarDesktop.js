import React from "react";
import { ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  ActionContainerDesktop,
  ActionContainerMobile,
  AppBarContainer,
  AppBarHeader,
  AppBarList,
  ItemButton,
  ItemIcon,
} from "../../styles/AppBarStyles";
import Actions from "../Actions/Actions";

const AppBarDesktop = ({ isMobile }) => {
  const ActionsContainer = isMobile
    ? ActionContainerMobile
    : ActionContainerDesktop;
  return (
    <AppBarContainer>
      <AppBarHeader>My Header</AppBarHeader>
      <AppBarList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Category" />
        <ListItemText primary="About" />
        <ListItemText primary="Contact" />
        <ItemButton>
          <ItemIcon>
            <SearchIcon />
          </ItemIcon>
        </ItemButton>
      </AppBarList>
      <ActionsContainer>
        <Actions />
      </ActionsContainer>
    </AppBarContainer>
  );
};

export default AppBarDesktop;
