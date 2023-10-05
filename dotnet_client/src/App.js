import './dist/output.css';
import axios from "axios"; 
import { useEffect, useState } from "react"; 
import TableColumn from './components/TableColumn';
import Input from './components/Input';
import { baseURL } from './const/const';
import NavVar from './components/Navbar';

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
      <NavVar></NavVar>
      <Input></Input>
      <TableColumn tasksArray={post}></TableColumn>
    </body>
  );
}

export default App;
