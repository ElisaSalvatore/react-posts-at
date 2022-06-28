import React, {useState} from 'react';
import Post from './components/FbPost'
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {author: "Elisa" , description: "Sto imparando React"},
    {author: "Mike" , description: "Sto registrando un video"},
    {author: "Andrea" , description: "Sto guardando un video"},
  ]);

  return (
    <div className="container">
      {posts.map((post) => (
        <Post author={post.author} description={post.description}/>
      ))}
      
    </div>
  );
}

export default App;
