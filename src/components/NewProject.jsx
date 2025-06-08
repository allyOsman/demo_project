// Import useRef for referencing DOM elements
import { useRef } from "react";

// Import reusable components
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

// Component to create a new project
export default function NewProject({ onAdd, onCancel }) {
  // Ref for controlling the Modal (for validation errors)
  const modal = useRef();

  // Refs for form inputs
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // Save handler for submitting the form
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validate input fields
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open(); // Show modal if validation fails
      return;
    }

    // Pass valid project data to parent component
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      {/* Modal shown when inputs are invalid */}
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl text-stone-700 font-bold mt-4 my-4">
          Invalid inputs
        </h2>
        <p className="text-stone-600 mb-4">
          Oops!! looks like you forget to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide valid values.
        </p>
      </Modal>

      {/* Form container */}
      <div className="w-[35rem] mt-16">
        
        {/* Action buttons */}
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-500 text-stone-50 hover:bg-stone-950"
              onClick={handleSave} // Triggers validation and save
            >
              Save
            </button>
          </li>
        </menu>

        {/* Input fields for the project */}
        <div>
          <Input type="text" label="Title" ref={title} />
          <Input label="Description" textarea={true} ref={description} />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
