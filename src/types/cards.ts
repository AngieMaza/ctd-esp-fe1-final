export interface ICharacter{
    id: number|null;
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
  