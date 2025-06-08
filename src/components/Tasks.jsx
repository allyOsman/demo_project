// Import the NewTask component for adding new tasks
import NewTask from "./NewTask.jsx";

// Tasks component receives tasks list, and handler functions for adding and deleting tasks
export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      {/* Section heading */}
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      {/* Render input form to add a new task */}
      <NewTask onAdd={onAdd} />

      {/* Show message if there are no tasks */}
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}

      {/* Render the list of tasks if available */}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              {/* Display task text */}
              <span>{task.text}</span>
              
              {/* Button to delete the task */}
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
