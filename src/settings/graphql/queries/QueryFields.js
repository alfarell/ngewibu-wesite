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
      genre_in: $genres,
      tag_in: $tags,
      search: $search
    ) {
      ...MediaList
    }
  }
`;

const DEFAULT_MEDIA_LIST = `
  trending: Page(page: $page, perPage: $perPage) {
    media(
      sort: TRENDING_DESC,
      type: $type,
      isAdult: false,
      season: $season,
      seasonYear: $seasonYear,
    ) {
      ...MediaList
    }
  }
  upcoming: Page(page: $page, perPage: $perPage) {
    media(
      sort: POPULARITY_DESC,
      type: $type,
      isAdult: false,
      season: $nextSeason,
      seasonYear: $seasonYear,
    ) {
      ...MediaList
    }
  }
  popular: Page(page: $page, perPage: $perPage) {
    media(
      sort: POPULARITY_DESC,
      type: $type,
      isAdult: false,
    ) {
      ...MediaList
    }
  }
  top: Page(page: $page, perPage: $perPage) {
    media(
      sort: SCORE_DESC,
      type: $type,
      isAdult: false,
    ) {
      ...MediaList
    }
  }
`

export { PAGE_QUERY, DEFAULT_MEDIA_LIST }