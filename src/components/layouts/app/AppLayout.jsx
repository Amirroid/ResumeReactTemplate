import VerticalScrollLayout from "../../scroll/VerticalScrollLayout";

export default function AppLayout({ children }) {
    return (
        <VerticalScrollLayout>
            <div className="bg-black w-screen min-h-screen text-white duration-50 font-light">
                {children}
            </div>
        </VerticalScrollLayout>
    )
}