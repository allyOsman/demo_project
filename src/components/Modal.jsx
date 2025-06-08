// Import necessary React hooks and utilities
import { forwardRef, useImperativeHandle, useRef } from "react";
// Import createPortal for rendering outside of main DOM hierarchy
import { createPortal } from "react-dom";

// Import a reusable Button component
import Button from "./Button.jsx";

// Modal component with forwarded ref for external control
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  // Create a ref to reference the <dialog> DOM element
  const dialog = useRef();

  // Expose an `open` method to parent components via the forwarded ref
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // Native HTML <dialog> method
      },
    };
  });

  // Render the modal using React Portal to attach it outside the root hierarchy
  return createPortal(
    // <dialog> element with styling and reference
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children} {/* Render content passed between <Modal>...</Modal> */}

      {/* Form with a button to close the modal */}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,

    // Target DOM node to inject modal (e.g., <div id="modal-root"></div>)
    document.getElementById("modal-root")
  );
});

// Export the modal as default
export default Modal;
