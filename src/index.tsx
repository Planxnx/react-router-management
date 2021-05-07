import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IRoutes } from './types'

const createRoute = (route: IRoutes) => (
  <Route exact={route.exactly} path={route.path} key={route.name}>
    <route.component />
  </Route>
)

export const RouterManagement: React.FC<{ routes: IRoutes[] }> = ({
  routes
}) => {
  return <Switch>{routes.map(createRoute)}</Switch>
}
