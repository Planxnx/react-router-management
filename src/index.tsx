import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IRoutes } from './types'

const createRoutes = (routes: IRoutes[]) => {
  let Routes: JSX.Element[] = []
  for (let route of routes) {
    Routes = [
      ...Routes,
      <Route exact={route.exactly} path={route.path} key={route.name}>
        <route.component />
      </Route>
    ]
  }
  return Routes
}

export const RouterManagement: React.FC<{ routes: IRoutes[] }> = ({
  routes
}) => {
  return <Switch>{createRoutes(routes)}</Switch>
}
