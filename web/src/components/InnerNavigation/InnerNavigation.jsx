import { InnerNavItem } from "../InnerNavItem/InnerNavItem"

const menuItems = [
    {
        name: "search",
        iconPath: "src/assets/icons/search.svg",
        fn: ""
    },

    {
        name: "sort",
        iconPath: "src/assets/icons/sort.svg",
        fn: ""
    },

    {
        name: "filter_list",
        iconPath: "src/assets/icons/filter_list.svg",
        fn: ""
    }
]



export function InnerNavigation() {

    return (

        <nav className="pokelist__nav">

            {menuItems.map((item) => (
                
                <InnerNavItem
                
                    key={item.name}
                    styleClass={"pokelist__nav__link"}
                    imgPath={item.iconPath}
                    name={item.name}
                
                />
            ))}
        </nav>
    )
}