import './dist/output.css';
import axios from "axios"; 
import { useEffect, useState } from "react"; 
import TableColumn from './components/TableColumn';

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
      <TableColumn tasksArray={post}></TableColumn>
    </body>
  );
}

export default App;
