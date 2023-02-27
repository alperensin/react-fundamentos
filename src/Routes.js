import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./pages/Posts";

export default function Routes() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/posts" component={Posts} exact />
    </>
  );
}
