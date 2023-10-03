"use client";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import Card from './card';

export function TaskColumn() {
    const [data, setData] = useState([])
    
useEffect(() => {
  const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5192/api/tasks");
      const data = await response.json();
      setData(data);    
  };

  fetchData();
}, []);

    if (!data) return <p>No profile data</p>
    return (
        <div>
            {data.map((task) => (
              <div key={task.id}>
                <Card name={task.name} />
              </div>
            ))}
        </div>
    )

}

export default TaskColumn;