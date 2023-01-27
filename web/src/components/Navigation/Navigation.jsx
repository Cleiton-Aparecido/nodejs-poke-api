import { NavigationItem } from "../NavigationItem/NavigationItem"

const linkList = [

    {
        url: "/",
        title: "Home"
    },

    {
        url: "/pokelist",
        title: "Pokelist"
    },

    {
        url: "/battle",
        title: "Battle"
    }

]

export function Navigation () {
    return (
        <nav className="navigation">
            <ul className="navigation__list">

            {linkList.map((link) => (
                <NavigationItem
                
                    key={link.title}
                    title={link.title}
                    url={link.url}
                
                />
            ))}


            </ul>
        </nav>
    )
}