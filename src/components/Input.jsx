// Import forwardRef to pass refs down to DOM elements
import { forwardRef } from "react";

// Define Input component using forwardRef to allow parent components to access the input/textarea DOM node
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  // Common CSS classes shared between <input> and <textarea>
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    // Wrapper element for label and input/textarea, with spacing
    <p className="flex flex-col gap-1 my-4">
      
      {/* Render the input label */}
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>

      {/* Conditionally render either <textarea> or <input> based on the `textarea` prop */}
      {textarea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </p>
  );
});

// Export the component as default
export default Input;
