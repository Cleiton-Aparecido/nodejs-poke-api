import { Link } from 'react-router-dom'

export function NavigationItem ({url, title}) {
    return (
        <li className="navigation__item">
            <Link className='navigation__link' to={url}>
                {title}
            </Link>
        </li>
    )
}