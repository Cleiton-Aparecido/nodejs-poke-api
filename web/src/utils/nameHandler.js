const exclusionList = [
    "Porigon-2", "Porygon-Z", "Ho-oh"
]

function nameHandler(pokeName) {
    pokeName = pokeName.toLowerCase()
    if (pokeName.contains("-") && !(pokeName.contains(exclusionList.toLowerCase()))) {
        pokeName.slice("-")
        return pokeName
    }
} 