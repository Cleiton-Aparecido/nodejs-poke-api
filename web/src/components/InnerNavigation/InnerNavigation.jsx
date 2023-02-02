import { InnerNavItem } from "../InnerNavItem/InnerNavItem"

const linkList = [

    {
        action: "/",
        name: "link"
    },

    {
        action: "/",
        name: "link"
    },

    {
        action: "/",
        name: "link"
    }
]

export function InnerNavigation() {

    return (

        <nav className="pokelist__nav">

            {linkList.map((button) => (
                
                <InnerNavItem
                
                    key={button.name}
                    styleClass={"pokelist__nav__link"}
                    name={button.name}
                
                />
            ))}
        </nav>
    )
}