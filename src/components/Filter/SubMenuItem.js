import React from 'react'
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subMenu: {
    maxHeight: 400,
    overflowY: 'auto',
  }
}))

const SubMenuItem = ({ data, title }) => {
  const classes = useStyles()
  const history = useHistory()

  if (!data.type) {
    const { listData } = data
    return (
      <div>

      </div>
    )
  }

  const {
    listData,
    loading,
    error,
    refetch,
  } = data

  const handleFilter = (history, value) => {
    const { location, push } = history
    const urlQueries = location.search
      ? `${location.search}&${title.toLowerCase()}=${value}`
      : `?${title.toLowerCase()}=${value}`


    push(location.pathname + urlQueries)
  }

  return (
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
  )
}

export default SubMenuItem
