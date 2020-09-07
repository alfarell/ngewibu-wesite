import { gql } from '@apollo/client';

const Fragments = {
  pageInfo: gql`
    fragment PageInfo on PageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
    }
    `,
  mediaList: gql`
    fragment MediaList on Media {
      id
      title {
        romaji
        english
      }
      bannerImage
      coverImage {
        large
        color
      }
      genres
      averageScore
    }
    `,
};

export default Fragments;