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

export interface Review {
  mal_id: number;
  url: string;
  type: string;
  reactions: {
    overall: number;
    nice: number;
    love_it: number;
    funny: number;
    confusing: number;
    informative: number;
    well_written: number;
    creative: number;
  };
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  chapters_read: number | null;
  entry: Entry;
}

export interface Entry {
  entry: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  };
  user: {
    url: string;
    username: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
      };
    };
  };
}

export interface MangaRecommendedByUser {
  content: string;
  date: string;
  mal_id: string;
  entry: Entry;
  user: {
    url: string;
    username: string;
  };
}
