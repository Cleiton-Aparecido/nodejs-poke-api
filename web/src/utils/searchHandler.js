// A function that handles the spaces of the search

export function searchHandler(query) {
    let cleanQuery = query.trim()

    //console.log(`Cleaned ${query.length - cleanQuery.length} empty spaces`)

    if (cleanQuery.includes(" ")) {
        cleanQuery = cleanQuery.replace(" ", "-")

        const hyphenPosition = cleanQuery.indexOf("-")

        cleanQuery = cleanQuery.split(cleanQuery[hyphenPosition])

        cleanQuery = cleanQuery[0] + "-" + cleanQuery[1].trim()

    }

    return cleanQuery
}

