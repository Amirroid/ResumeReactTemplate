import { useState } from "react";
import ObserveEnterExit from "../anim/ObserveEnterExit";

export default function ProjectItem({ project }) {
    const [visible, setVisible] = useState(false);

    return (
        <ObserveEnterExit onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
            <img
                src={project.image}
                alt={project.title}
                className={`
                    rounded-lg w-full h-[20rem] object-cover cursor-pointer
                    transition-all
                    duration-500 ease-[cubic-bezier(0.4, 0.0, 0.2, 1.0)]
                    hover:scale-[1.02] hover:shadow-lg
                    ${visible ? "scale-100 blur-0 opacity-100" : "scale-90 blur-lg opacity-0"}
                `}
            />
        </ObserveEnterExit>
    );
}