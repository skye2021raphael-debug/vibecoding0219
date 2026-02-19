export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-2 bg-[#C08497] text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}