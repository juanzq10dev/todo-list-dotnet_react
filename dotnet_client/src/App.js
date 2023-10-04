import './dist/output.css';
import axios from "axios"; 
import { useEffect, useState } from "react"; 
import TableColumn from './components/TableColumn';
import Input from './components/Input';

const baseURL = "http://127.0.0.1:5192/tasks"; 
function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  })

  function createPost() {
    axios.post(baseURL, {
      id: 3,
      name: "Create endpoints for tasks",
      status: true
    })
  }

  if (!post) return null; 
  return (
    <body>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={createPost}>Add tasks</button>
      <Input></Input>
      <TableColumn tasksArray={post}></TableColumn>
    </body>
  );
}

export default App;
