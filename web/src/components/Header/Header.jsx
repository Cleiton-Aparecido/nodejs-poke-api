import { Navigation } from "../Navigation/Navigation"

const logoURL = "../../public/logo_pokemon.png"
const userPhoto = "../../public/avatar.jpg"

export function Header () {
    return (
        <header className="header">
           <img className="header__logo" src={logoURL} />

            <Navigation />

            <div className="user">
                <span className="user__name">username</span>

                <img className="user__icon" src={userPhoto}/>
            </div>
        </header>
    )
}