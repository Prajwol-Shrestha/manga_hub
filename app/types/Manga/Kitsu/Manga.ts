export interface Manga extends MangaAttributes {
    id: string;
    type: string;
    links: {
        self: string;
    };
    relationships: {
        genres: {
            links: {
                self: string;
                related: string;
            };
        };
        categories: {
            links: {
                self: string;
                related: string;
            };
        };
        castings: {
            links: {
                self: string;
                related: string;
            };
        };
    };
}

export interface MangaAttributes{
    attributes: {
        createdAt: string;
        updatedAt: string;
        slug: string;
        synopsis: string;
        description: string;
        coverImageTopOffset: number;
        titles: {
            en_us: string;
            zh_cn?: string;
            en_jp?: string;
            en?: string;
        };
        canonicalTitle: string;
        abbreviatedTitles: string[];
        averageRating: string;
        ratingFrequencies: {
            [key: string]: string;
        };
        userCount: number;
        favoritesCount: number;
        startDate: string;
        endDate: string | null;
        nextRelease: string | null;
        popularityRank: number;
        ratingRank: number;
        ageRating: string;
        ageRatingGuide: string | null;
        subtype: string;
        status: string;
        tba: string | null;
        posterImage: {
            tiny: string;
            large: string;
            small: string;
            medium: string;
            original: string;
            meta: {
                dimensions: {
                    tiny: {
                        width: number;
                        height: number;
                    };
                    large: {
                        width: number;
                        height: number;
                    };
                    small: {
                        width: number;
                        height: number;
                    };
                    medium: {
                        width: number;
                        height: number;
                    };
                };
            };
        };
        coverImage: {
            tiny: string;
            large: string;
            small: string;
            original: string;
            meta: {
                dimensions: {
                    tiny: {
                        width: number;
                        height: number;
                    };
                    large: {
                        width: number;
                        height: number;
                    };
                    small: {
                        width: number;
                        height: number;
                    };
                };
            };
        };
        chapterCount: number | null;
        volumeCount: number | null;
        serialization: string | null;
        mangaType: string;
    };
}
