import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { ThemeContext } from "../../context/ThemeContext";
import * as S from "./styles";

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <S.Title>{title}</S.Title>
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
