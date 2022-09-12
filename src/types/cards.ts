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
    eisode: Array<string>;
    url: string;
    created: string;
  }

  export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Array<string>;
    url: string;
    created: string;
  }

  export interface IChapter{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    charactes: Array<string>;
    url: string;
    created: string;
  }
  