import './dist/output.css';
import axios from "axios"; 
import { useEffect, useState } from "react"; 

const baseURL = "http://127.0.0.1:5192/tasks"; 
function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  })

  if (!post) return null; 
  return (
    <body>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      {post.map((task) => {
        return <div>{task.name}</div>
      })}
      <button class="btn">Button</button>
      <button class="btn btn-neutral">Neutral</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-link">Link</button>
    </body>
  );
}

export default App;
