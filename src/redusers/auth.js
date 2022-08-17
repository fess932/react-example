import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: '' }

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

export const isAuthenticated = (state) => state.auth.value !== ''
export const getAuth = (state) => state.auth.value

// Action creators are generated for each case reducer function
export const { setAuth, logoff } = authSlice.actions

export const authReducer = authSlice.reducer
