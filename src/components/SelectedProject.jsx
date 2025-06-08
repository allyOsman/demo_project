// Import the Tasks component to render task-related UI
import Tasks from "./Tasks.jsx";

// Define and export the SelectedProject component (note: should be PascalCase: SelectedProject)
export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  // Format the due date to a readable string (e.g., "Jun 8, 2025")
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    // Main container for the selected project's content
    <div className="w-[35rem] mt-16">
      
      {/* Project Header Section */}
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          {/* Project Title */}
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>

          {/* Delete button to remove the project */}
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>

        {/* Display formatted due date */}
        <p className="mb-4 text-stone-400">{formattedDate}</p>

        {/* Display project description with preserved line breaks */}
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      {/* Render the list of tasks with add/delete handlers */}
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
