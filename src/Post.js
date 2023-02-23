import React from "react";
import PropTypes from "prop-types";

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title || "Titulo da notícia"}</strong> <br />
        <small>{props.post.subtitle || "Subtítulo da notícia"}</small>
      </article>
      Likes: {props.likes}
      <br />
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
