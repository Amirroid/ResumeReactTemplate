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
        <div className="flex md:flex-row flex-col justify-between mt-12 px-horizontal md:px-horizontal-md">
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
                    I am an Android developer specializing in Jetpack Compose and MVVM, MVI architecture. I also develop open-source libraries in Kotlin to optimize and streamline software development.                </p>
                <Spacer height={1.7} />
                <PrimaryButton>Let's Talk</PrimaryButton>
            </div>
            <div className="space-y-4">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-7xl font-bold"><span className="text-primary">+</span>4</h2>
                    <p className="text-sm font-light">Years of Experience</p>
                </div>
            </div>
        </div>
    );
}
