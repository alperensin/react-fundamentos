import React from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post title="Título da notícia 01" subtitle="Subtítulo da notícia 01" />
      <Post title="Título da notícia 02" subtitle="Subtítulo da notícia 02" />
      <Post title="Título da notícia 03" subtitle="Subtítulo da notícia 03" />
      <Post title="Título da notícia 04" subtitle="Subtítulo da notícia 04" />
      <Post title="Título da notícia 05" subtitle="Subtítulo da notícia 05" />
      <Post title="Título da notícia 06" subtitle="Subtítulo da notícia 06" />
    </>
  );
}

export default App;
