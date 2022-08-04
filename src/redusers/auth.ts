import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type AuthState = {
  value: string
}

const initialState: AuthState = { value: '' }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload
    },
    logoff: (state) => {
      state.value = ''
    },
  },
})

export const isAuthenticated = (state: RootState) => state.auth.value !== ''
export const getAuth = (state: RootState) => state.auth.value

// Action creators are generated for each case reducer function
export const { setAuth, logoff } = authSlice.actions

export const authReducer = authSlice.reducer
