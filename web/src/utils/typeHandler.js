const typeList = [
    "default", "normal", "grass", "fire", "water", "flying", "bug", "poison", "electric", "ground", "fighting", "psychic", "rock", "ice", "ghost", "ghost", "dark", "steel", "fairy", "dragon"
]

export function typeHandler(type) {
    
    return typeList.includes(type) ? type : type[0] 
}