import TaskItem from "./TaskItem";
function TaskList({ tasks, onDelete }) {
    return (
        <ul className="mt-4">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
}
export default TaskList;