import { Navigation } from "../Navigation/Navigation"

export function Header () {
    return (
        <header className="header">
           <img className="logo" />

            <Navigation />

            <div className="user">
                <img className="user__icon" />

                <span className="user__name">username</span>
            </div>
        </header>
    )
}