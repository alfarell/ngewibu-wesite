const generateGenreData = (data) => {
  const { GenreCollection, ...genreGQLOptions } = data
  const genres = GenreCollection ?
    GenreCollection.map((genre, index) => ({
      id: index + 1, name: genre
    })) : []

  return {
    type: 'gql',
    listData: genres,
    ...genreGQLOptions
  }
}

const generateTagData = (data) => {
  const { MediaTagCollection, ...tagGQLOptions } = data
  const tags = MediaTagCollection ?
    MediaTagCollection.filter(({ isAdult }) => {
      if (isAdult) return false
      return true
    }).map(({ id, name }) => ({ id, name })) : []

  return {
    type: 'gql',
    listData: tags,
    ...tagGQLOptions
  }
}

export { generateGenreData, generateTagData }