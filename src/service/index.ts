export const getAllCharacters = async ( page: Record<string,string>={}) => {
    const response = await fetch("https://rickandmortyapi.com/api/character/?"+ new URLSearchParams(page))
    .then(response => response.json())
    return response.results;
}

export const getCharactersByName = async ( page: Record<string,string>={}, name:string) => {
    const response = await fetch("https://rickandmortyapi.com/api/character/?" + new URLSearchParams(page)+"&name="+ name)
    .then(response =>response.json());
    return response.results
}
