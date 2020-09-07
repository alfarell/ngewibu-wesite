import React from 'react'
import {
  makeStyles,
  Card,
  CardMedia,
  Grid,
  Typography,
  Paper,
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  container: {
    // maxWidth: 700,
    // minWidth: 500
  },
  card: {
    height: 250,
    width: 175,
    [theme.breakpoints.between(960, 1000)]: {
      width: 150,
      height: 200
    }
  },
  thumbnail: {
    height: 250
  }
}))

const HorizontalList = ({ contentTitle, data }) => {
  const classes = useStyles()

  return (
    <>
      <Paper>
        <Typography variant='h5'>{contentTitle}</Typography>
      </Paper>
      <Grid container>
        {data.media.map(media => {
          return (
            <Grid item key={media.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.thumbnail}
                  image={media.coverImage.large}
                />
              </Card>
              <div style={{ width: 175 }}>
                {/* <p>{media.title.romaji}</p> */}
                <Typography variant='subtitle1' noWrap>
                  {media.title.romaji}
                </Typography>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default HorizontalList
