import TaskCard from "./TaskCard";

export default function TableColumn({tasksArray}) {
    return (
        <div class="content-evenly">
            {tasksArray.map((task) => {
                return (
                    <TaskCard name={task.name} isCompleted={task.completed} id={task.id}></TaskCard>
                )                   
            })}
        </div>
    );
}