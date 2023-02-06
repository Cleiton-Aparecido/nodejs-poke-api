export function InnerNavItem({name, action, imgPath, styleClass}) {

    return (

        <img id={`${name}-icon`} className={`icon ${styleClass}`} src={imgPath} onClick={action} />

    )
}