import { useEffect, useState } from "react";

export default function useAnimate({ value = 0, isStart = true }) {
    const [displayedPercentage, setDisplayedPercentage] = useState(0);
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        if (isStart) {
            const duration = 700;
            const steps = 60;
            const stepDuration = duration / steps;
            const startValue = displayedPercentage;
            const endValue = currentValue;
            const difference = endValue - startValue;
            const step = difference / steps;
            let current = startValue;

            const interval = setInterval(() => {
                current += step;
                
                if ((step > 0 && current >= endValue) || 
                    (step < 0 && current <= endValue)) {
                    clearInterval(interval);
                    setDisplayedPercentage(endValue);
                } else {
                    setDisplayedPercentage(current);
                }
            }, stepDuration);

            return () => clearInterval(interval);
        } else {
            setDisplayedPercentage(0);
        }
    }, [isStart, currentValue]);

    return [displayedPercentage, setCurrentValue];
}
