import React from "react";
import Header from "./Header";
import Post from "./Post";

const posts = [
  {
    title: "Título da notícia 01",
    subtitle: "Subtítulo da notícia 01",
    likes: 0,
  },
  {
    title: "Título da notícia 02",
    subtitle: "Subtítulo da notícia 02",
    likes: 2,
  },
  {
    title: "Título da notícia 03",
    subtitle: "Subtítulo da notícia 03",
    likes: 20,
  },
  {
    title: "Título da notícia 04",
    subtitle: "Subtítulo da notícia 04",
    likes: 7,
  },
  {
    title: "Título da notícia 05",
    subtitle: "Subtítulo da notícia 05",
    likes: 13,
  },
];

function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map(({ title, subtitle, likes }) => (
        <Post key={title} post={{ title, subtitle }} likes={likes} />
      ))}
    </>
  );
}

export default App;
