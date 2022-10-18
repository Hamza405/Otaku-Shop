import { Container, Button, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}></Container>
    </ThemeProvider>
  );
}

export default App;
