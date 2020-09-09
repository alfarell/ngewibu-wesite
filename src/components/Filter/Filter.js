import React from 'react'
import {
  Paper,
  List,
  ListSubheader,
  makeStyles,
} from '@material-ui/core'
import { graphql } from '@apollo/react-hoc'
import { flowRight as compose } from 'lodash'
import { GENRE_LIST_QUERY, TAG_LIST_QUERY } from '../../settings/graphql/queries/FilterQueries'
import { useLocation } from 'react-router-dom'
import getURLQuery from '../../utils/GetQuery'
import FilterSubMenu from './FilterSubMenu'


const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
}))

const Filter = ({ GetGenreList, GetTagList }) => {
  const classes = useStyles()
  const location = useLocation()
  const query = getURLQuery(location.search)
  console.log(query.getAll('genres'));

  return (
    <Paper className={classes.container}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Filter
          </ListSubheader>
        }
      >
        <FilterSubMenu genreList={GetGenreList} title='Genres' />
        <FilterSubMenu tagList={GetTagList} title='Tags' />
      </List>
    </Paper>
  )
}

export default compose(
  graphql(GENRE_LIST_QUERY, {
    name: 'GetGenreList'
  }),
  graphql(TAG_LIST_QUERY, {
    name: 'GetTagList'
  }),
)(Filter)
