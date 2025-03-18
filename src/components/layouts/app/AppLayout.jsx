import VerticalScrollLayout from "../../scroll/VerticalScrollLayout";
import FirstLaunchAnimation from "../../anim/FirstLaunchAnimation";
export default function AppLayout({ children }) {
    return (
        <FirstLaunchAnimation>
            <VerticalScrollLayout>
                <div className="bg-black w-screen min-h-screen text-white duration-50 font-light">
                    {children}
                </div>
            </VerticalScrollLayout>
        </FirstLaunchAnimation>
    )
}