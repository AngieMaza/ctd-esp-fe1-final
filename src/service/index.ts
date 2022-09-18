/* export const getAllCharacters = async ( page: Record<string,string>={}) => {
    const response = await fetch("https://rickandmortyapi.com/api/character/?"+ new URLSearchParams(page))
    .then(response => response.json())
    return response.results;
} */

export const getCharacters = async (page: string, name: string) => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?" +
      new URLSearchParams({ page, name })
  );

  const asJson = await response.json();
  return asJson.results;
};
