export const getCharacters = async (page: string, name: string) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/?" + new URLSearchParams({ page, name })
  );
  const asJson = await response.json();
  return asJson;
};

export const getCharactersFavorites = async ( array : number[] ) => {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + array );
  const asJson = await response.json();
  return asJson
};

export const getCapitulos = async ( ids: string ) => {
  const response = await fetch("https://rickandmortyapi.com/api/episode/" + ids)
  .then(response => response.json());
  return response;
};