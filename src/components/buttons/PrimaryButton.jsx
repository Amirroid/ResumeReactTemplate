export default function PrimaryButton({ children }) {
    return (
        <button className="text-black rounded-full bg-primary w-fit border border-1.5 border-primary px-6 py-1.5 
                           hover:cursor-pointer transition-all duration-200 ease-in-out 
                           hover:text-primary hover:bg-transparent active:scale-95 select-none">
            {children}
        </button>
    );
}