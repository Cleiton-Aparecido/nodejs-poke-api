// A function that handles the spaces of the search

export function searchHandler(query) {
    let cleanQuery = query.trim()

    //console.log(`Cleaned ${query.length - cleanQuery.length} empty spaces`)

    if (cleanQuery.includes(" ")) {
        cleanQuery = cleanQuery.replaceAll(" ", "-")

        console.log(cleanQuery)
    }

    return cleanQuery
}
