import MenuItem from "./MenuItem";

export default function Menu({ menuItems, enabledItem }) {
    return (
        <div className="flex flex-row align-middle space-x-8">
            {menuItems.map((item) => <MenuItem name={item} enabled={item == enabledItem} />)}
        </div>
    )
}