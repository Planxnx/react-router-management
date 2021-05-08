import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IRoutes } from './types'

const createRoutes = (routes: IRoutes[], defaultPaths?: string) => {
  let Routes: JSX.Element[] = []
  for (let route of routes) {
    if (route.group) {
      Routes = [...Routes, ...createRoutes(route.group, route.path)]
    } else if (route.component) {
      Routes = [
        ...Routes,
        <Route
          exact={route.exactly}
          path={defaultPaths ? defaultPaths + route.path : route.path}
          key={route.name}
        >
          <route.component />
        </Route>
      ]
    }
  }
  return Routes
}

export const RouterManagement: React.FC<{ routes: IRoutes[] }> = ({
  routes
}) => {
  return <Switch>{createRoutes(routes)}</Switch>
}
