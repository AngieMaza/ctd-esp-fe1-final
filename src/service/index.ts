export const getAllCharacters =async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
}

export const getCharactersByName = async (name:string) => {
    const response = await fetch("https://rickandmortyapi.com/api/character/?name=" + name).then(response =>
    response.json());
    return response.results

}
