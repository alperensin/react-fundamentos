import React from 'react';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.title || "Titulo da notícia"}</strong> <br />
        <small>{props.subtitle || "Subtítulo da notícia"}</small>
      </article>
      <br />
    </>
  )
}