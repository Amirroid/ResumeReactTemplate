
export default function SecondaryButton({ children }) {
    return (
        <div className="text-white border border-1.5 rounded-full border-white px-4 py-1.5 hover:cursor-pointer transition-all hover:text-black hover:bg-white active:scale-95 select-none">
            {children}
        </div>
    )
}