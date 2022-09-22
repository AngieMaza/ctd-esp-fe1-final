export interface ICharacter{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin:{
      name: string;
      url: string;
    };
    location:{
      name: string;
      url: string;
    };
    image: string;
    episode: Array<string>;
    url: string;
  }
  export interface IChapter{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
    created: string;
  }
  export type CharacterState= {
    characters: ICharacter[];
    loading: boolean;
    page: number;
    name: string;
    detail: ICharacter;
    favoritesId: number[];
    favorites: ICharacter[];
}