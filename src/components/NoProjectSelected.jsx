// Import image to show when no project is selected
import noProjectImage from "../assets/no-projects.png";

// Import reusable Button component
import Button from "./Button.jsx";

// Component displayed when no project is currently selected
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    // Centered container with spacing and width styling
    <div className="mt-24 text-center w-2/3">

      {/* Informative image about no projects being selected */}
      <img
        src={noProjectImage}
        alt="No projects image"
        className="w-16 h-16 object-contain mx-auto"
      />

      {/* Heading indicating no project is selected */}
      <h2 className="text-xl text-stone-500 font-bold mt-4 my-4">
        No project selected
      </h2>

      {/* Suggestive message to the user */}
      <p className="text-stone-400 mb-4">
        Select a project or start with a new one
      </p>

      {/* Button to trigger the creation of a new project */}
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
