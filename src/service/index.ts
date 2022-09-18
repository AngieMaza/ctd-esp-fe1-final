/* export const getAllCharacters = async ( page: Record<string,string>={}) => {
    const response = await fetch("https://rickandmortyapi.com/api/character/?"+ new URLSearchParams(page))
    .then(response => response.json())
    return response.results;
} */

export const getCharacters = async ( page: string, name:string) => {
    const response = (name.length>0) ? 
    await fetch("https://rickandmortyapi.com/api/character/?" + new URLSearchParams([["page", page],["name", name]]))
    .then(response =>response.json()) : 
    await fetch("https://rickandmortyapi.com/api/character/?" + new URLSearchParams(page))
    .then(response =>response.json());
    return response.results;
}
