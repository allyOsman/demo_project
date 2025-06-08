// Import the custom Button component
import Button from "./Button.jsx";

// Sidebar component to display list of projects and an "Add Project" button
export default function ProjectSideBar({
  onStartAddProject,   // Function to trigger adding a new project
  projects,            // Array of project objects
  onSelectProject,     // Function to select a specific project
  selectProjectId,     // Currently selected project ID
}) {
  return (
    // Sidebar container with styling
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      
      {/* Sidebar heading */}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>

      {/* Button to start adding a new project */}
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      {/* Render the list of existing projects */}
      <ul className="mt-8">
        {projects.map((project) => {
          // Base CSS classes for each project button
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          // Highlight the selected project
          if (project.id === selectProjectId) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }

          // Render each project as a selectable button
          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)} // Call selection handler
              >
                {project.title} {/* Display project title */}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
