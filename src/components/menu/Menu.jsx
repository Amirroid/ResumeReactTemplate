import MenuItem from "./MenuItem";

export default function Menu({ menuItems, enabledItem, onMenuClick }) {
    return (
        <div className="flex flex-row align-middle space-x-8">
            {menuItems.map((item) => <div key={item}><MenuItem name={item} enabled={item == enabledItem} onClick={() => onMenuClick(item)} /> </div>)}
        </div>
    )
}