import axios from "axios";
import { useState } from "react";
import { baseURL } from "../const/const";
import './styles.css';

export default function Input() {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (event) => {
    setInputText(event.target.value);
    };

    function createPost() {
        axios.post(baseURL, {
        id: "",
        name: inputText,
        status: false
        })
    }
    
    return (
        <div class="display-flex">
            <div class="horizontal-margin"> 
            <input type="text" placeholder="Task name" className="input input-bordered w-full max-w-xs" value={inputText} onChange={handleInputChange} />
            </div>
            <button class="btn btn-primary" onClick={createPost}>Add Task</button>
        </div>
    )
}