import HorizontalPadding from "../padding/HorizontalPadding"
import ProjectItem from "./ProjectItem"
import TranslationContext from "../../context/TranslationContext"
import { useContext } from "react"

export default function ProjectsSection() {
    const { t } = useContext(TranslationContext);
    const ktorAdminDescription = t('ktor_admin_description');
    const projects = [
        {
            id: 1,
            title: "KtorAdmin",
            image: "images/bg.jpg",
            link: "https://github.com/Amirroid/KtorAdmin",
            description: ktorAdminDescription
        },
        {
            id: 2,
            title: "KtorAdmin",
            image: "images/bg.jpg",
            link: "https://github.com/Amirroid/KtorAdmin",
            description: ktorAdminDescription
        },
        {
            id: 3,
            title: "KtorAdmin",
            image: "images/bg.jpg",
            link: "https://github.com/Amirroid/KtorAdmin",
            description: ktorAdminDescription
        },
        {
            id: 4,
            title: "KtorAdmin",
            image: "images/bg.jpg",
            link: "https://github.com/Amirroid/KtorAdmin",
            description: ktorAdminDescription
        },
    ]
    return (
        <HorizontalPadding>
            <div className="flex flex-col mt-36 gap-4 items-center">
                <h1 className="text-5xl font-bold">{t('projects_section')}</h1>
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