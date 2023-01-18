export function NavigationItem ({url, title}) {
    return (
        <li className="navigation__item">
            <a href={url} className="navigation__link" target={"_blank"}>
                {title}
            </a>
        </li>
    )
}