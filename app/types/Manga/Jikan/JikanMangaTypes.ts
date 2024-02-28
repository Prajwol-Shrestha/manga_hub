interface ImageVariant {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Image {
  jpg: ImageVariant;
  webp: ImageVariant;
}

interface Title {
  type: string;
  name: string;
}

interface PublishedInfo {
  from: string;
  to: string | null;
  prop: any; // This can be specified further based on known properties
  string: string;
}

interface Author {
  name: string;
}

interface Serialization {
  name: string;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Theme {
  mal_id: number;
  name: string;
  url: string;
}

interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface JikanManga {
  mal_id: number;
  url: string;
  images: Image;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  publishing: boolean;
  published: PublishedInfo;
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: any[]; // This can be specified further based on known properties
  themes: Theme[];
  demographics: Demographic[];
}

// getting all genre types from jikan
export interface MangaGenres {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export interface RecommendedMangaType {
  entry: JikanManga;
  Url: string;
  votes: number;
}
