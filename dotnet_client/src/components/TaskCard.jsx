import axios from "axios";
import { baseURL } from "../const/const";
import './styles.css'

export default function TaskCard({name, isCompleted, id}) {
    function deleteTask() {
        axios.delete(`${baseURL}/${id}`)
    }

    function updateTask() {
      axios.put(`${baseURL}/${id}`, {
        id: id, 
        name: name,
        completed: !isCompleted
      })
    }

    return (
      <div class="margin">

    <div className="alert shadow-lg">
        <span></span>
      <div>
        <span className="font-bold">{name}</span>
      </div>
      <input type="checkbox" onChange={updateTask} checked={isCompleted} className="checkbox" />
      <button className="w-5 h-5  btn-square " onClick={deleteTask}>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    </div>
      </div>
    );   
}