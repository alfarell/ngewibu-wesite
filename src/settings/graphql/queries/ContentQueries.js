import { gql } from '@apollo/client';
import Fragments from "../fragments/Fragments";


const { mediaList, pageInfo } = Fragments;

const PAGE_QUERY = `
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      ...PageInfo
    }
    media(
      sort: $sort,
      type: $type,
      isAdult: false,
      season: $season,
      seasonYear: $seasonYear,
      genre_in: $genreIn,
      tag_in: $tagIn,
      search: $search
    ) {
      ...MediaList
    }
  }
`;

const MediaListQuery = (field) => gql`
  query MediaSmall(
    $page: Int, 
    $perPage: Int, 
    $sort: [MediaSort],
    $season: MediaSeason,
    $seasonYear: Int,
    $genreIn: [String],
    $tagIn: [String],
    $search: String,
    $type: MediaType
  ) {
    ${field}
  }
`;

const QUERIES = {
  MEDIA_LIST_QUERY: gql`
    ${MediaListQuery(PAGE_QUERY)}
    ${mediaList}
    ${pageInfo}
  `,
  MAIN_QUERY: gql`
  query(
    $page: Int, 
    $perPage: Int,
    $currnetSeason: MediaSeason,
    $nextSeason: MediaSeason,
    $seasonYear: Int,
  ) {
    TrendingAnime: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(
        sort: TRENDING_DESC, 
        type: ANIME, 
        season: $currnetSeason, 
        seasonYear: $seasonYear, 
        isAdult: false
      ) {
        ...MediaList
      }
    }
    UpcomingAnime: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(
        sort: POPULARITY_DESC, 
        type: ANIME, 
        season: $nextSeason, 
        seasonYear: $seasonYear, 
        isAdult: false
      ) {
        ...MediaList
      }
    }
    PopularAnime: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(
        sort: POPULARITY_DESC, 
        type: ANIME, 
        isAdult: false
      ) {
        ...MediaList
      }
    }
    TrendingManga: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(
        sort: TRENDING_DESC, 
        type: MANGA, 
        isAdult: false
      ) {
        ...MediaList
      }
    }
    PopularManga: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(
        sort: POPULARITY_DESC, 
        type: MANGA, 
        isAdult: false
      ) {
        ...MediaList
      }
    }
    FavoritedCharacters: Page(page: $page, perPage: $perPage) {
      characters(sort: FAVOURITES_DESC) {
        id
        name {
          full
          native
        }
        image {
          large
          medium
        }
        favourites
      }
    }
  }

  ${mediaList}
  ${pageInfo}
  `,
  ANIME_LIST_MAIN_QUERY: gql`
  query(
    $page: Int, 
    $perPage: Int,
    $currnetSeason: MediaSeason,
    $nextSeason: MediaSeason,
    $seasonYear: Int,
  ) {
    TrendingAnime: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(
        sort: TRENDING_DESC, 
        type: ANIME, 
        season: $currnetSeason, 
        seasonYear: $seasonYear, 
        isAdult: false
      ) {
        ...MediaList
      }
    }
    UpcomingAnime: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(
        sort: POPULARITY_DESC, 
        type: ANIME, 
        season: $nextSeason, 
        seasonYear: $seasonYear, 
        isAdult: false
      ) {
        ...MediaList
      }
    }
    PopularAnime: Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...PageInfo
      }
      media(
        sort: POPULARITY_DESC, 
        type: ANIME, 
        isAdult: false
      ) {
        ...MediaList
      }
    }
  }

  ${mediaList}
  ${pageInfo}
  `,
}

export default QUERIES;
// export { MEDIA_LIST_QUERY };