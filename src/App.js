import { Container, Button, ThemeProvider } from "@mui/material";
import AppBar from "./components/AppBar/AppBar";
import theme from "./styles/theme";
import React from "react";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <AppBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
