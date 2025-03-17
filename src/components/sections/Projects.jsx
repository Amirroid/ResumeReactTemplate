import HorizontalPadding from "../padding/HorizontalPadding"
import ProjectItem from "./ProjectItem"

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "KtorAdmin",
            image: "images/bg.jpg",
        },
        {
            id: 2,
            title: "KtorAdmin",
            image: "images/bg.jpg",
        },
        {
            id: 3,
            title: "KtorAdmin",
            image: "images/bg.jpg",
        },
    ]
    return (
        <HorizontalPadding>
            <div className="flex flex-col mt-36 gap-4 items-center">
                <h1 className="text-5xl font-bold">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <ProjectItem project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </HorizontalPadding>
    )
}