import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Título#1",
      subtitle: "Sub#1",
      likes: 0,
      read: false,
    },
    {
      id: Math.random(),
      title: "Título#2",
      subtitle: "Sub#2",
      likes: 2,
      read: true,
    },
    {
      id: Math.random(),
      title: "Título#3",
      subtitle: "Sub#3",
      likes: 20,
      read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título#${posts.length + 1}`,
        subtitle: `Sub#${posts.length + 1}`,
        likes: Math.floor(Math.random() * 50),
        read: false,
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

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </>
  );
}

export default App;
