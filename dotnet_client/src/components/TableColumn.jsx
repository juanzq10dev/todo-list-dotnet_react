import TaskCard from "./TaskCard";

export default function TableColumn({tasksArray}) {
    return (
        <div>
            {tasksArray.map((task) => {
                return (
                    <TaskCard name={task.name} isCompleted={task.completed}></TaskCard>
                )                   
            })}
        </div>
    );
}