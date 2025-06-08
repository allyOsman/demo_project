// Importing the useState hook from React to manage component state
import { useState } from "react";

// Importing child components
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  // Defining the main state of the app which holds selected project ID, list of projects, and tasks
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // undefined = no project selected
    projects: [], // list of projects
    tasks: [], // list of tasks
  });

  // Handler to add a new task
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random(); // generate a unique task ID
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId, // associate task with selected project
        id: taskId,
      };

      // Return new state with the new task added
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  // Handler to delete a task by ID
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id // remove task with matching ID
        ),
      };
    });
  }

  // Handler to select a project by ID
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // Handler to start adding a new project
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // null = in the process of adding a new project
      };
    });
  }

  // Handler to cancel project creation
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // reset selection
      };
    });
  }

  // Handler to add a new project
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random(); // generate unique project ID
      const newProject = {
        ...projectData,
        id: projectId,
      };

      // Add new project and reset selection
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // Handler to delete the currently selected project
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // clear selection
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId // remove the selected project
        ),
      };
    });
  }

  // Find the currently selected project from the state
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // Define the content to render based on the state
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  // If user is adding a new project, show NewProject form
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } 
  // If no project is selected, show a placeholder message
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // Return the main layout with sidebar and content
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
