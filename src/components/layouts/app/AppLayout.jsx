
export default function AppLayout({ children }) {
    return (
        <div className="px-12 py-6 bg-black w-screen min-h-screen text-white duration-50 font-light">
            {children}
        </div>
    )
}