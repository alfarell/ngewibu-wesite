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
}

export default QUERIES;
// export { MEDIA_LIST_QUERY };