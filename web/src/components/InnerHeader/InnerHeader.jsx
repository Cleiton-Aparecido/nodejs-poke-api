import { InnerNavigation } from "../InnerNavigation/InnerNavigation"

export function InnerHeader({styleClass}) {

    return (

        <header className={styleClass}>
            <InnerNavigation />
        </header>
    )

}