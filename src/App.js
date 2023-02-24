import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: "Título#1", subtitle: "Sub#1", likes: 0 },
    { id: Math.random(), title: "Título#2", subtitle: "Sub#2", likes: 2 },
    { id: Math.random(), title: "Título#3", subtitle: "Sub#3", likes: 20 },
    { id: Math.random(), title: "Título#4", subtitle: "Sub#4", likes: 7 },
    { id: Math.random(), title: "Título#5", subtitle: "Sub#5", likes: 13 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título#${posts.length + 1}`,
        subtitle: `Sub#${posts.length + 1}`,
        likes: Math.floor(Math.random() * 50),
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter(({ id }) => id !== postId));
  }

  return (
    <>
      <Header>
        <h2>
          Posts da semana <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(({ id, title, subtitle, likes }) => (
        <Post
          key={id}
          onRemove={handleRemovePost}
          post={{ id, title, subtitle }}
          likes={likes}
        />
      ))}
    </>
  );
}

export default App;
