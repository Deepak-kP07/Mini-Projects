export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-green-400 hover:bg-green-500 px-2 py-1 rounded-md transition-colors duration-200"
      {...props}
    >
      {children}
    </button>
  );
}
