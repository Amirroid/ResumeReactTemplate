export default function MenuItem({ name, enabled = true }) {
    return (
        <div>
            <h2 className={
                `text-lg ${enabled ? "text-white" : "text-gray-400"} transition-all hover:text-white hover:cursor-pointer`
            }>{name}</h2>
        </div>
    )
}