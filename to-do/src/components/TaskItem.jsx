function TaskItem({ task, onDelete }) {
    return (
        <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">

            <span>{task}</span>

            <button
                onClick={onDelete}
                className="text-red-500"
            >
                Delete
            </button>

        </li>
    );
}
export default TaskItem;