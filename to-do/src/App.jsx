import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const validate = (value) => {
    if (value.trim() === "") return "Task cannot be empty";
    if (value.length < 3) return "Minimum 3 characters";
    return "";
  };

  const handleChange = (value) => {
    setTask(value);
    setError(validate(value));
  };

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
    setError("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        
        <h1 className="text-2xl font-bold text-center mb-4">
          To-Do List 📝
        </h1>

        <TaskInput
          task={task}
          onChange={handleChange}
          onAdd={addTask}
          error={error}
        />

        <p className="mt-3 text-sm text-blue-600">
          Total Tasks: {tasks.length}
        </p>

        <TaskList tasks={tasks} onDelete={deleteTask} />

      </div>
    </div>
  );
}

export default App;