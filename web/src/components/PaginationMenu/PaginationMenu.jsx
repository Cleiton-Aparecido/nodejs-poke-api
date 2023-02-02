export function PaginationMenu({extraStyle, prevFunction, nextFunction}) {
    return (

        <aside className={`page-controls ${extraStyle}`} >
            <button className="btn page-controls__btn pokelist__btn" onClick={prevFunction}>Prev</button>
            <button className="btn page-controls__btn pokelist__btn" onClick={nextFunction}>Next</button>
        </aside>
    )
}