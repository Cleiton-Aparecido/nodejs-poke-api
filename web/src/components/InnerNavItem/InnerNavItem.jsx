export function InnerNavItem({name, action, href, styleClass, target}) {

    return (

        <a
        className={styleClass}
        onClick={action || ""} 
        href={href || "#"} 
        target={target || "_blank"}
        >
            {name}
        </a>

    )
}