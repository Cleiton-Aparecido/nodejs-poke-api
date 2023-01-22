const exclusionList = ["porygon-2", "porygon-z", "ho-oh", "deoxys", "kommo-o", "hakamo-o", "jangmo-o", "ting-lu", "chi-yu", "wo-chien"];

//console.log(exclusionList.map((exclusionList) => exclusionList.toUpperCase()))

export function handlePokeName(pokeName) {
  pokeName = pokeName.toLowerCase();

  if ((pokeName.includes("-")) && !(exclusionList.includes(pokeName))) {
    let cleanPokeName = cleanString(pokeName);

    console.log(`Before: ${pokeName} | After ${cleanPokeName}`)

    return cleanPokeName;

  } else {

    return pokeName;
  }
}

function cleanString(string) {
  let cleanString = string.replace("-", " ");

  cleanString = cleanString.split(" ")

  cleanString = `${cleanString[0]} (${cleanString[1]})`

  console.log(cleanString)

  return cleanString;
}
