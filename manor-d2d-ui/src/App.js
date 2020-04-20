import React from "react";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import NavBar from "./components/NavBar/NavBar";
import PageWrapper from "./components/PageWrapper/PageWrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <PageWrapper>
        <h1>Content</h1>
      </PageWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
