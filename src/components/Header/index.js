import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { ThemeContext } from "../../context/ThemeContext";
import Title from "../Title";

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>Toggle Theme</Button>
      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  title: "JStack's Blog",
};
