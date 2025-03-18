
import HorizontalPadding from "../padding/HorizontalPadding"
import TechStackItem from "./TechStackItem"
import TranslationContext from "../../context/TranslationContext"
import { useContext } from "react"

export default function TechStacksSections() {
    const { t } = useContext(TranslationContext);
    const stacks = [
        {
            id: 1,
            title: "Kotlin",
            image: "images/kotlin.png",
            percentage: 100,
        },
        {
            id: 2,
            title: "Jetpack Compose",
            image: "images/compose.png",
            percentage: 100,
        },
        {
            id: 3,
            title: "Ktor",
            image: "images/ktor.png",
            percentage: 90,
        },
        {
            id: 5,
            title: "React",
            image: "images/react.png",
            percentage: 80,
        },
        {
            id: 10,
            title: "Git",
            image: "images/git.png",
            percentage: 80,
        },
        {
            id: 20,
            title: "Python",
            image: "images/python.webp",
            percentage: 80,
        },
        {
            id: 12,
            title: "CSS",
            image: "images/css.png",
            percentage: 80,
        },
        {
            id: 13,
            title: "HTML",
            image: "images/html.png",
            percentage: 80,
        },
        {
            id: 6,
            title: "JavaScript",
            image: "images/javascript.png",
            percentage: 75,
        },
        {
            id: 11,
            title: "Tailwind CSS",
            image: "images/tailwindcss.png",
            percentage: 60,
        },
        {
            id: 18,
            title: "Java",
            image: "images/java.png",
            percentage: 60,
        },
        {
            id: 7,
            title: "MongoDB",
            image: "images/mongo.webp",
            percentage: 50,
        },
        {
            id: 8,
            title: "PostgreSQL",
            image: "images/postgresql.png",
            percentage: 50,
        },
        {
            id: 9,
            title: "Redis",
            image: "images/redis.webp",
            percentage: 50,
        },
    ];



    return (
        <HorizontalPadding>
            <div className="flex flex-col mt-36 gap-4 items-center">
                <h1 className="text-5xl font-bold">{t('tech_stacks_section')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full mt-12">
                    {stacks.map((stack) => (
                        <div key={stack.id}>
                            <TechStackItem stack={stack} />
                        </div>
                    ))}
                </div>
            </div>
        </HorizontalPadding>
    )
}