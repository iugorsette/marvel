interface ICharacter {
  items: IComicSummary[];
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  available: number;
  returned: number;
  collectionURI: string;
}
