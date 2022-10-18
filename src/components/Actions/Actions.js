import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import {
  ActionContainerDesktop,
  ActionContainerMobile,
  AppBarList,
  ActionItemButton,
  ActionItemIcon,
} from "../../styles/AppBarStyles";
import { Divider } from "@mui/material";

const Actions = ({ isMobile }) => {
  const ActionContainer = isMobile
    ? ActionContainerMobile
    : ActionContainerDesktop;
  return (
    <ActionContainer>
      <AppBarList sx={{ flexGrow: 1 }} type="row">
        <ActionItemButton>
          <ActionItemIcon isMobile={isMobile}>
            <ShoppingCartIcon />
          </ActionItemIcon>
        </ActionItemButton>
        <Divider orientation="vertical" flexItem />
        <ActionItemButton>
          <ActionItemIcon isMobile={isMobile}>
            <FavoriteIcon />
          </ActionItemIcon>
        </ActionItemButton>
        <Divider orientation="vertical" flexItem />
        <ActionItemButton>
          <ActionItemIcon isMobile={isMobile}>
            <PersonIcon />
          </ActionItemIcon>
        </ActionItemButton>
      </AppBarList>
    </ActionContainer>
  );
};

export default Actions;
