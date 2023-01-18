import { NavigationItem } from "../NavigationItem/NavigationItem"

export function Navigation () {
    return (
        <nav className="navigation">
            <ul className="navigation__list">

               <NavigationItem
                    url={"#"}
                    title={"Main"}
                />

               <NavigationItem
                    url={"#"}
                    title={"List"}
               />

               <NavigationItem
                    url={"#"}
                    title={"Fight"}
                />

            </ul>
        </nav>
    )
}