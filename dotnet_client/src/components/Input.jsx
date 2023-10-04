import axios from "axios";
import { useState } from "react";

const baseURL = "http://127.0.0.1:5192/Tasks"; 

export default function Input() {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (event) => {
    setInputText(event.target.value);
    };

    function createPost() {
        axios.post(baseURL, {
        id: 4,
        name: inputText,
        status: true
        })
    }
    
    return (
        <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={inputText} onChange={handleInputChange} />
            <button class="btn btn-primary" onClick={createPost}>Add Task</button>
        </div>
    )
}