import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Spacer from "../spacer/Spacer";

export default function MyInformationSection() {
    const headingRef = useRef(null);
    const [textWidth, setTextWidth] = useState("auto");

    useEffect(() => {
        const updateWidth = () => {
            if (headingRef.current) {
                const range = document.createRange();
                range.selectNodeContents(headingRef.current);
                const rect = range.getBoundingClientRect();
                setTextWidth(`${rect.width}px`);
            }
        };

        updateWidth();

        const resizeObserver = new ResizeObserver(updateWidth);
        if (headingRef.current) {
            resizeObserver.observe(headingRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="flex flex-row justify-between mt-12 px-horizontal md:px-horizontal-md">
            <div className="max-w-[45%]">
                <h1
                    ref={headingRef}
                    className="text-7xl font-bold leading-[4.3rem] w-fit break-words whitespace-normal tracking-wider"
                >
                    Amirreza Gholami,
                </h1>
                <p
                    className="text-sm font-light mt-4 break-words whitespace-normal"
                    style={{ width: textWidth, wordWrap: "break-word" }}
                >
                    The user is an Android developer proficient in Jetpack Compose and MVVM architecture. They are also engaged in projects related to Ktor, image processing, and game development.
                </p>
                <Spacer height={1.7} />
                <PrimaryButton>Let's Talk</PrimaryButton>
            </div>
        </div>
    );
}
