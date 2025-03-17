export default function MenuItem({ name, enabled = true, onClick }) {
    return (
        <div>
            <h2 className={
                `text-lg ${enabled ? "text-white" : "text-gray-400"} transition-all hover:text-white text-sm hover:cursor-pointer`
            } onClick={onClick}>{name}</h2>
        </div>
    )
}