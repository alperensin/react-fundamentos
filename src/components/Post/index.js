import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import * as S from "./styles";

export default function Post(props) {
  return (
    <S.Container read={props.post.read} removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />

      <S.Subtitle>{props.post.subtitle}</S.Subtitle>
      <S.Likes>Likes: {props.post.likes}</S.Likes>
    </S.Container>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};
