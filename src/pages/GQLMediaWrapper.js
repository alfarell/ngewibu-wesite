import React from 'react'
import { useLocation } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { Grid } from '@material-ui/core'
import { graphql } from '@apollo/react-hoc'
import { flowRight as compose } from 'lodash'
import getQuery from '../utils/GetQuery'
import { Filter } from '../components'

const gqlMediaWrapper = (Component, { pageTitle, gqlQuery }) => {
  const RenderComponent = (props) => {
    return (
      <DocumentTitle title={pageTitle}>
        <Grid container direction='row' justify='space-between'>
          <Grid item xs={12} md={3} lg={2}>
            <Filter />
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            <Component {...props} />
          </Grid>
        </Grid>
      </DocumentTitle>
    )
  }

  const { query, name, options } = gqlQuery

  return graphql(query, {
    name: name || 'data',
    options: (props) => {
      console.log('gqlOptions', props);
      return options
    },
  })(RenderComponent)
}

export default gqlMediaWrapper
