import { AppBar, Button, Stack, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks'
import { logoff } from '../redusers/auth'

function Home() {
  const dispatch = useAppDispatch()
  const exit = () => {
    dispatch(logoff())
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/profile'>Профиль</Link>
          <Button variant='contained' onClick={exit}>
            Выход
          </Button>
        </Toolbar>
      </AppBar>

      <Stack>
        <div>Карточка</div>
        <div>Карточка</div>
        <div>Карточка</div>
      </Stack>
    </div>
  )
}

export default Home
