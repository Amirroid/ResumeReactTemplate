import { useEffect, useState } from "react";
import ObserveEnterExit from "../anim/ObserveEnterExit";

export default function TechStackItem({ stack }) {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const [displayedPercentage, setDisplayedPercentage] = useState(0);

    useEffect(() => {
        if (visible) {
            const duration = 700;
            const steps = stack.percentage;
            const stepDuration = duration / steps;
            let start = 0
            const step = stack.percentage / steps;
            const interval = setInterval(() => {
                start += step;
                setDisplayedPercentage(start);
                if (start >= stack.percentage) {
                    clearInterval(interval);
                }
            }, stepDuration);

            const timeout = setTimeout(() => setProgress(stack.percentage), 300);
            return () => {
                clearTimeout(timeout)
                clearInterval(interval);
            };
        } else {
            setProgress(0);
        }
    }, [visible, stack.percentage]);

    return (
        <ObserveEnterExit onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
            <div
                className={`border border-white/30 hover:border-white/40 hover:scale-105 rounded-lg p-4 flex items-center gap-4 transition-all
                    duration-500 ease-[cubic-bezier(0.4, 0.0, 0.2, 1.0)]
                    ${visible ? "scale-100 blur-0 opacity-100" : "scale-90 blur-lg opacity-0"} cursor-pointer hover:bg-white/5`}
            >
                <img src={stack.image} alt={stack.title} className="w-8 h-8 object-contain" />
                <div className="w-full space-y-1">
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="text-white text-lg font-bold">{stack.title}</h1>
                        <p className="text-primary text-sm font-thin">{displayedPercentage}%</p>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full relative overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full transition-all duration-700"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </ObserveEnterExit>
    );
}