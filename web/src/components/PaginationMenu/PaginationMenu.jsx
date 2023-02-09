export function PaginationMenu({extraStyle, prevFunction, nextFunction}) {
    return (

        <aside className={`page-controls ${extraStyle}`} >
            <button className="page-controls__btn" onClick={prevFunction}>{"< Prev"}</button>
            <button className="page-controls__btn" onClick={nextFunction}>{"Next >"}</button>
        </aside>
    )
}