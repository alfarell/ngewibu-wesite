import { gql } from '@apollo/client';
import Fragments from "../fragments/Fragments";
import { PAGE_QUERY, DEFAULT_MEDIA_LIST } from './QueryFields';


const { mediaList, pageInfo } = Fragments;

const generateMediaSmallQuery = (field) => gql`
  query MediaSmall(
    $page: Int,
    $perPage: Int,
    $season: MediaSeason,
    $nextSeason: MediaSeason,
    $seasonYear: Int,
    $type: MediaType
  ) {
    ${field}
  }
`;

const QUERIES = {
  MEDIA_LIST_QUERY: gql`
    ${generateMediaSmallQuery(PAGE_QUERY)}
    ${mediaList}
    ${pageInfo}
  `,
  MEDIA_DEFAULT_QUERY: gql`
    ${generateMediaSmallQuery(DEFAULT_MEDIA_LIST)}
    ${mediaList}
  `,
}

export default QUERIES;
// export { MEDIA_LIST_QUERY };