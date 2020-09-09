import React, { useState } from 'react'
import {
  List,
  makeStyles,
  ListItemText,
  ListItem,
  Collapse
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subMenu: {
    maxHeight: 400,
    overflowY: 'auto',
  }
}))

const FilterSubMenu = ({ genreList, tagList, title, ...props }) => {
  const classes = useStyles()
  const history = useHistory()
  const [open, setOpen] = useState(false)
  let data = {}

  //re-set graphql data of genres
  if (genreList) {
    const { GenreCollection, ...genreGQLOptions } = genreList
    const genres = GenreCollection ?
      GenreCollection.map((genre, index) => ({
        id: index + 1, name: genre
      })) : []
    data = { listData: genres, ...genreGQLOptions }
  }
  //re-set graphql data of tags
  if (tagList) {
    const { MediaTagCollection, ...tagGQLOptions } = tagList
    const tags = MediaTagCollection ?
      MediaTagCollection.filter(({ isAdult }) => {
        if (isAdult) return false
        return true
      }).map(({ id, name }) => ({ id, name })) : []
    data = { listData: tags, ...tagGQLOptions }
  }

  const {
    listData,
    loading,
    error,
    refetch,
  } = data

  const handleOpenSubMenu = () => {
    setOpen(!open)
  }

  const handleFilter = (history, value) => {
    const { location, push } = history
    const urlQueries = location.search
      ? `${location.search}&${title.toLowerCase()}=${value}`
      : `?${title.toLowerCase()}=${value}`


    push(location.pathname + urlQueries)
  }

  return (
    <>
      <ListItem button onClick={handleOpenSubMenu}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding className={classes.subMenu}>
          {loading && <p>Loading {title.toLowerCase()} collection</p>}
          {error && <p>Failed to get {title.toLowerCase()} collection</p>}
          {!loading && listData && listData.map(({ id, name }) => {
            return (
              <ListItem
                key={id}
                button
                className={classes.nested}
                onClick={() => handleFilter(history, name)}
              >
                <ListItemText primary={name} />
              </ListItem>
            )
          })}
        </List>
      </Collapse>
    </>
  )
}

export default FilterSubMenu
