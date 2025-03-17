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
        // className={`overflow-y-auto scrollbar w-full overflow-x-hidden h-screen ${isScrolling ? "scrollbar-visible" : "scrollbar-hidden"}`}
        <div className="scrollbar-hidden w-full min-h-screen overflow-y-auto">
            {children}
        </div>
    );
}
