import { gql } from '@apollo/client';

const GENRE_LIST_QUERY = gql`
  query Genres{
    GenreCollection
  }
`;

const TAG_LIST_QUERY = gql`
  query Tags{
    MediaTagCollection {
      id
      name
      description
      category
      isAdult
    }
  }
`;

export { GENRE_LIST_QUERY, TAG_LIST_QUERY };