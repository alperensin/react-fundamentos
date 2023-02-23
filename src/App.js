import React from 'react';
import Post from './Post';

function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post title="Título da notícia 01" subtitle="Subtítulo da notícia 01" />
      <Post title="Título da notícia 02" subtitle="Subtítulo da notícia 02" />
      <Post title="Título da notícia 03" subtitle="Subtítulo da notícia 03" />
      <Post title="Título da notícia 04" subtitle="Subtítulo da notícia 04" />
      <Post title="Título da notícia 05" subtitle="Subtítulo da notícia 05" />
      <Post title="Título da notícia 06" subtitle="Subtítulo da notícia 06" />
    </>
  )
}

export default App;