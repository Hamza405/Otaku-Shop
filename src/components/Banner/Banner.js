import React from "react";
import { Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDes,
  BannerImage,
} from "../../styles/BannerStyle";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Kunai05.jpg" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Collection</BannerTitle>
        <BannerDes>
          Lorem Lorem Lorem Lorem LoremLorem Lorem
          LoremLoremLoremLoremLoremLoremLoremLorem
        </BannerDes>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
