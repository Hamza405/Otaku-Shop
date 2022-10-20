import { Container, ThemeProvider } from "@mui/material";
import AppBar from "./components/AppBar/AppBar";
import theme from "./styles/theme";
import React from "react";
import Banner from "./components/Banner/Banner";
import Promotion from "./components/Promotion/Promotion";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ margin: "auto", background: "#fff" }}>
        <AppBar />
        <Banner />
        <Promotion />
      </Container>
    </ThemeProvider>
  );
}

export default App;
