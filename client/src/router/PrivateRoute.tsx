import { AppLayout } from 'layout'
import { AuthContext } from 'context/auth/AuthContext'
import React, { useContext } from 'react'
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom'

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const location = useLocation()
  const { state } = useContext(AuthContext)
  const { isAuthenticated, token } = state
  console.log(location)
  const routeComponent = () => {
    return isAuthenticated || token ? (
      <AppLayout>
        <Component />
      </AppLayout>
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          search: `?next=${location.pathname}`,
          state: { from: location }
        }}
      />
    )
  }

  return <Route {...rest} render={routeComponent} />
}

export { PrivateRoute }
