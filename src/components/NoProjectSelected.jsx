import noProjectImage from "../assets/no-projects.png";

import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="No projects image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl text-stone-500 font-bold mt-4 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or started with new one
      </p>

      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
