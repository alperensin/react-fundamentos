import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Routes from "../../Routes";
import { Nav } from "./styles";

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/123456">Post</Link>
      </Nav>
      <div
        style={{
          height: "calc(100vh - 276px)",
          overflow: "hidden",
          overflowY: "scroll",
          position: "relative",
        }}
      >
        <Routes />
      </div>
      <Footer selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
    </BrowserRouter>
  );
}
