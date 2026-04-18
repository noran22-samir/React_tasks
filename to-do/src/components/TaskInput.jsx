function TaskInput({ task, onChange, onAdd, error }) {
    return (
        <div>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Enter your task..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    onClick={onAdd}
                    disabled={error !== "" || task === ""}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-blue-400"
                >
                    Add
                </button>
            </div>

            {error && (
                <p className="text-red-500 text-sm mt-1">
                    {error}
                </p>
            )}
        </div>
    );
}

export default TaskInput;