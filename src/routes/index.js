import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, AnimeListPage, MangaListPage, ForumPage } from '../pages'

const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    id: 2,
    path: '/anime',
    exact: true,
    component: AnimeListPage
  },
  {
    id: 3,
    path: '/anime/:filter',
    exact: false,
    component: AnimeListPage
  },
  {
    id: 4,
    path: '/manga',
    exact: true,
    component: MangaListPage
  },
  {
    id: 5,
    path: '/manga/:filter',
    exact: false,
    component: MangaListPage
  },
  {
    id: 6,
    path: '/forum',
    exact: false,
    component: ForumPage
  },
]

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ id, path, exact, component }) => (
        <Route
          key={id}
          path={path}
          exact={exact}
          component={component}
        />
      ))}
    </Switch>
  )
}

export default Routes
