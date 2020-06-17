interface Column {
  prop: string;
  displayName: string;
  width?: number;
}

interface Data {
  title: string;
  url: string;
  platform: string;
  score: string;
  genre: string;
  editors_choice: string;
  release_year: string;
}

export {
  Column,
  Data
};
