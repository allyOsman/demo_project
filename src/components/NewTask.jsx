import { useState } from "react";

// Component to add a new task
export default function NewTask({ onAdd }) {
  // State to store the current value of the input field
  const [enteredTask, setEnteredTask] = useState("");

  // Update the enteredTask state when the input value changes
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  // Handle the Add Task button click
  function handleClick() {
    // Prevent adding empty tasks (ignores whitespace-only strings)
    if (enteredTask.trim() === "") {
      return;
    }
    // Call the onAdd function passed as prop to add the new task
    onAdd(enteredTask);
    // Clear the input field after adding the task
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      {/* Input field for typing new task */}
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}  // Listen to changes in input
        value={enteredTask}      // Bind input value to state
      />
      {/* Button to add the task */}
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}   // Add task on click
      >
        Add Task
      </button>
    </div>
  );
}
