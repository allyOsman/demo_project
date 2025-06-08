// Define and export a reusable Button component
export default function Button({ children, ...props }) {
  return (
    // Wrapper <div> — optional, can be useful for layout purposes
    <div>
      {/* Button element that accepts all passed props (e.g., onClick, type) */}
      <button
        {...props}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        {children} {/* Render the content passed between <Button>...</Button> */}
      </button>
    </div>
  );
}
