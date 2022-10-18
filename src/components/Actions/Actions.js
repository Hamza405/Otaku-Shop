import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { AppBarList, ItemButton, ItemIcon } from "../../styles/AppBarStyles";
import { Divider } from "@mui/material";

const Actions = () => {
  return (
    <AppBarList sx={{ flexGrow: 1 }} type="row">
      <ItemButton>
        <ItemIcon>
          <ShoppingCartIcon />
        </ItemIcon>
      </ItemButton>
      <Divider orientation="vertical" flexItem />
      <ItemButton>
        <ItemIcon>
          <FavoriteIcon />
        </ItemIcon>
      </ItemButton>
      <Divider orientation="vertical" flexItem />
      <ItemButton>
        <ItemIcon>
          <PersonIcon />
        </ItemIcon>
      </ItemButton>
    </AppBarList>
  );
};

export default Actions;
