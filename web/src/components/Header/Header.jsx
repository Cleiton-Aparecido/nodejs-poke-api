import { Navigation } from "../Navigation/Navigation"

export function Header ({logoURL, userPhotoURL}) {
    return (
        <header className="header">
           <img className="header__logo" src={logoURL} />

            <Navigation />

            <div className="user">
                <span className="user__name">username</span>

                <img className="user__icon" src={userPhotoURL}/>
            </div>
        </header>
    )
}