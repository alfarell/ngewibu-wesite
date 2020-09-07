import React from 'react'
import { Paper, List, ListSubheader, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
}))

const Filter = () => {
  const classes = useStyles()

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

      </List>
    </Paper>
  )
}

export default Filter
