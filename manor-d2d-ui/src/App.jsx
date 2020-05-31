import React from "react";
import { Switch } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme/theme";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Home from "./components/Home/Home";

const App = () => {
  const routes = [
    {
      title: "Database of Streets Visited",
      link: "/",
      breadcrumb: "Sankirtana Forever",
      component: Home,
    },
    {
      title: "Be A Giver Campaign",
      link: "/be-a-giver-campaign",
      breadcrumb: "Be A Giver Campaign",
      component: Home,
    },
    {
      title: "Photos",
      link: "/photos",
      breadcrumb: "Photos",
      component: Home,
    },
    {
      title: "Videos",
      link: "/videos",
      breadcrumb: "Videos",
      component: Home,
    },
  ];
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Banner
          routes={routes}
          currentPage={{
            title: "Database of Streets Visited",
            link: "/",
            breadcrumb: "Sankirtana Forever",
          }}
        />
        <PageWrapper routes={routes} />
        <Footer />
      </ThemeProvider>
    </Switch>
  );
};

export default App;
