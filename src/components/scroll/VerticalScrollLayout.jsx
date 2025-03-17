import { useEffect, useRef, useState } from "react"

export default function VerticalScrollLayout({ children }) {
    // const [isScrolling, setIsScrolling] = useState(false);
    // const timeoutId = useRef(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolling(true);
    //         if (timeoutId.current) clearTimeout(timeoutId.current);
    //         timeoutId.current = setTimeout(() => {
    //             setIsScrolling(false);
    //         }, 2000);
    //     };

    //     const container = document.getElementById("scroll-container");
    //     container.addEventListener("scroll", handleScroll);

    //     return () => container.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div
            id="scroll-container"
            // className={`overflow-y-auto scrollbar w-full overflow-x-hidden h-screen ${isScrolling ? "scrollbar-visible" : "scrollbar-hidden"}`}
            className={`overflow-y-auto scrollbar w-full overflow-x-hidden min-h-screen scrollbar-hidden`}
        >
            {children}
        </div>
    );
}
