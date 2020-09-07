import { gql } from '@apollo/client';

const getGenreQuery = gql`
    query {
        GenreCollection
    }
`;

const getTagsQuery = gql`
    query {
        MediaTagCollection {
            id
            name
            description
            category
            isAdult
        }
    }
`;

export { getGenreQuery, getTagsQuery };