export default function SecondaryButton({ children }) {
    return (
        <button className="text-white border border-1.5 rounded-full border-white px-4 py-1.5 
                           cursor-pointer transition-all duration-200 ease-in-out
                           hover:text-black hover:bg-white active:scale-95 
                           focus:outline-none focus:ring focus:ring-white/50 select-none">
            {children}
        </button>
    );
}