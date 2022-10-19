import { Box, styled, Typography } from "@mui/material";
import { Colors } from "./theme/index";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  alignItems: "center",

  background: Colors.light_gray,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "500px",
  minWidth: 0,
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "275px",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  justifyContent: "center",
  maxWidth: "95%",
  padding: 30,
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: 55,
  minWidth: 0,
  marginBottom: 20,
  [theme.breakpoints.down("sm")]: {
    fontSize: 33,
  },
}));

export const BannerDes = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  minWidth: 0,

  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.1,
    letterSpacing: 1.1,
    marginBottom: "1.5em",
    maxWidth: "75%",
  },
}));
