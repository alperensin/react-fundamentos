import React from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post
        likes={0}
        post={{
          title: "Título da notícia 01",
          subtitle: "Subtítulo da notícia 01",
        }}
      />
      <Post
        likes={5}
        post={{
          title: "Título da notícia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />
      <Post
        likes={4}
        post={{
          title: "Título da notícia 03",
          subtitle: "Subtítulo da notícia 03",
        }}
      />
      <Post
        likes={20}
        post={{
          title: "Título da notícia 04",
          subtitle: "Subtítulo da notícia 04",
        }}
      />
    </>
  );
}

export default App;
