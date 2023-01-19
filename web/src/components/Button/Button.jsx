export function Button ({title, action, type}) {
    return (
        <button className="btn" type={type} onClick={action}>
            {title}
        </button>
    )
}