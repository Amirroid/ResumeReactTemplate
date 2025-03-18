export default function ThirdButton({ children, className="" }) {
    return (
        <button className={`text-white bg-black border border-1.5 rounded-full border-black px-4 py-1.5 
                           cursor-pointer transition-all duration-200 ease-in-out
                           hover:text-black hover:bg-transparent active:scale-95 
                           focus:outline-none focus:ring focus:ring-white/50 select-none flex flex-row items-center gap-2 ${className}`}>
            {children}
        </button>
    );
}