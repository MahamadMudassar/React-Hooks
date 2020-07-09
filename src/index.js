import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
      
  }, []);
  console.log(posts);
  return (
    <div className="App">
      <div style={{}}>
        {posts.map((item, i) => (
          <li key={i} style={{}}>
            {item.title} 
          </li>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
