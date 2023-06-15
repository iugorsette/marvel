interface IComic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  characters: ICharacter[];
  images: Array<{
    path: string;
    extension: string;
  }>;
  prices: any[];
  quantity: number;
}
