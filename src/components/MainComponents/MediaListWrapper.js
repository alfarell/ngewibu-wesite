import React from 'react'
import { useLocation } from 'react-router-dom'
import getQuery from '../../utils/GetQuery'

const mediaListWrapper = (Component, { pageTitle, mediaType }) => {
  const RenderComponent = () => {
    const location = useLocation()
    const query = getQuery(location.search)



    return (
      <DocumentTitle title={pageTitle}>
        <Grid container direction='row' justify='space-between'>
          <Grid item xs={12} md={3} lg={2}>
            <Filter />
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            <Component mediaType={} />
          </Grid>
        </Grid>
      </DocumentTitle>
    )
  }

  return RenderComponent
}

export default mediaListWrapper