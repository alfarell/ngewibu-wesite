import React from 'react'
import QUERIES from '../settings/graphql/queries/ContentQueries'
import { currentSeason, currentYear, nextSeason } from '../utils/SetSeason'
import gqlMediaWrapper from './GQLMediaWrapper'
import { Button } from '@material-ui/core'

const AnimeListPage = ({ animeList, location }) => {
  const {
    trending,
    upcoming,
    popular,
    top,
    loading,
    error,
    refetch,
  } = animeList

  const listData = [
    {
      id: 1,
      data: trending,
      title: 'Trending This Season'
    },
    {
      id: 2,
      data: upcoming,
      title: 'Upccoming Next Season'
    },
    {
      id: 3,
      data: popular,
      title: 'Popular Anime'
    },
    {
      id: 4,
      data: top,
      title: 'Top Anime'
    },
  ]

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p>Failed to get media</p>
          <Button onClick={() => refetch()}>Try Again</Button>
        </div>
      )}
      {listData.map(({ id, data, title }) => {
        if (data) {
          return (
            <div key={id}>
              <h3>{title}</h3>
              <div style={{ width: '100%', padding: '10px 0' }} key={id}>
                {data.media.map(media => {
                  return (
                    <div key={media.id} style={{ display: 'inline-block', height: 240, width: 150, margin: 5, boxSizing: 'border-box', overflow: 'hidden' }}>
                      <img src={media.coverImage.large} alt={media.title.romaji} style={{ height: 200, width: 150 }} />
                      <p style={{ overflow: 'hidden' }}>{media.title.romaji}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      })}
    </>
  )
}

const AnimeQueries = {
  query: QUERIES.MEDIA_DEFAULT_QUERY,
  name: 'animeList',
  options: {
    variables: {
      page: 1,
      perPage: 8,
      season: currentSeason,
      nextSeason: nextSeason,
      seasonYear: currentYear,
      type: 'ANIME',
    },
    notifyOnNetworkStatusChange: true
  }
}

export default gqlMediaWrapper(AnimeListPage, {
  pageTitle: 'Anime List',
  initialQuery: AnimeQueries
})
