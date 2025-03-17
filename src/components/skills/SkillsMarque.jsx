import { useEffect, useRef } from "react";
import SparkleIcon from "../images/Sparkle";

export default function SkillsMarque() {
    const texts = ["Mobile Developer", "Application Developer", "Frontend Developer", "UI Designer", "Backend Developer"];
    const marqueeRef = useRef(null);

    const playAnimation = () => {
        const marqueeElement = marqueeRef.current;
        if (!marqueeElement) return;
        marqueeElement.style.animationPlayState = "running";
    }
    const pauseAnimation = () => {
        const marqueeElement = marqueeRef.current;
        if (!marqueeElement) return;
        marqueeElement.style.animationPlayState = "paused";
    }

    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        if (!marqueeElement) return;
        pauseAnimation()
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                playAnimation();
            } else {
                pauseAnimation();
            }
        }, { threshold: 0.5 });

        observer.observe(marqueeElement);
        return () => {
            observer.unobserve(marqueeElement);
        }
    }, []);


    return (
        <div className="overflow-hidden bg-primary text-white h-12 w-full">
            <div className="flex gap-20 whitespace-nowrap h-full items-center animate-marquee" ref={marqueeRef} onPointerEnter={pauseAnimation} onPointerLeave={playAnimation}>
                {texts.map((text, index) => (
                    <div key={`first-${index}`} className="flex gap-20">
                        <span className="text-black font-medium">{text}</span>
                        <SparkleIcon className="flex-shrink-0 w-5 h-5" />
                    </div>
                ))}
                {texts.map((text, index) => (
                    <div key={`second-${index}`} className="flex gap-20">
                        <span className="text-black font-medium">{text}</span>
                        <SparkleIcon className="flex-shrink-0 w-5 h-5" />
                    </div>
                ))}
            </div>
        </div >
    );
}