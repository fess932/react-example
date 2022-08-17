import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../home'
import { useAppSelector } from '../hooks'
import Profile from '../profile'
import { isAuthenticated } from '../redusers/auth'
import Signin from '../signin'
import Signup from '../signup'

function AppRoutes() {
  return (
    <Routes>
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />

      <Route
        path='/'
        element={
          <ProtectedRoute
            isAuth={useAppSelector(isAuthenticated)}
            authenticationPath='/signin'
            outlet={<Home />}
          />
        }
      />

      <Route
        path='profile'
        element={
          <ProtectedRoute
            isAuth={useAppSelector(isAuthenticated)}
            authenticationPath='/signin'
            outlet={<Profile />}
          />
        }
      />
    </Routes>
  )
}

function ProtectedRoute({
  isAuth,
  authenticationPath,
  outlet,
}) {
  if (isAuth) {
    return outlet
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />
  }
}

export default AppRoutes
