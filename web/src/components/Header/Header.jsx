import { Navigation } from "../Navigation/Navigation"

const logoURL = "../../public/logo.png"

export function Header () {
    return (
        <header className="header">
           <img className="header__logo" src={logoURL} />

            <Navigation />

            <div className="user">
                <img className="user__icon" />

                <span className="user__name">username</span>
            </div>
        </header>
    )
}