export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col mb-4">
      <label
        className="px-1 uppercase text-sm font-semibold text-stone-600"
        htmlFor=""
      >
        {label}
      </label>
      <input
        className="p-2 border-4 border-b-green-300 rounded-md focus:outline-none bg-green-100"
        {...props}
      />
    </div>
  );
}
