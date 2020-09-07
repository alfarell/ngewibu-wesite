import React from 'react'
import DocumentTitle from 'react-document-title'
import { Grid } from '@material-ui/core'
import { graphql } from '@apollo/react-hoc'
import { flowRight as compose } from 'lodash'
import { useLocation } from 'react-router-dom'
import { Filter } from '../components'
import QUERIES from '../settings/graphql/queries/ContentQueries'
import { currentSeason, currentYear, nextSeason } from '../utils/SetSeason'

const AnimeListPage = (props) => {
  console.log(props);
  return (
    <DocumentTitle title="Anime Page">
      <Grid container direction='row' justify='space-between'>
        <Grid item xs={12} md={3} lg={2}>
          <Filter />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
        </Grid>
      </Grid>
    </DocumentTitle>
  )
}

export default compose(
  graphql(QUERIES.MEDIA_LIST_QUERY, {
    name: 'Trending',
    alias: 'Trending',
    options: {
      variables: {
        page: 1,
        perPage: 8,
        season: currentSeason,
        seasonYear: currentYear,
        sort: 'TRENDING_DESC',
        type: 'ANIME',
      }
    }
  }),
  graphql(QUERIES.MEDIA_LIST_QUERY, {
    name: 'Upcoming',
    options: {
      variables: {
        page: 1,
        perPage: 8,
        season: nextSeason,
        seasonYear: currentYear,
        sort: 'POPULARITY_DESC',
        type: 'ANIME',
      }
    }
  }),
)(AnimeListPage)
