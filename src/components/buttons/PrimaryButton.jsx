export default function PrimaryButton({ children, onClick }) {
    return (
        <button onClick={onClick} className="text-black rounded-full bg-primary w-fit border border-1.5 border-primary px-6 py-1.5 
                           cursor-pointer transition-all duration-200 ease-in-out 
                           hover:text-primary hover:bg-transparent active:scale-95 select-none">
            {children}
        </button>
    );
}