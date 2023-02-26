import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

export default function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}
