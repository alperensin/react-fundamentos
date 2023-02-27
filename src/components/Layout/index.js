import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Routes from "../../Routes";

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
      <Routes />
      <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
    </>
  );
}
