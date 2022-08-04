import { Button, Input, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks'
import { setAuth } from '../redusers/auth'

function Signin() {
  const dispatch = useAppDispatch()

  const [login, setLogin] = useState('')
  const loginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value)
  }

  const [password, setPassword] = useState('')
  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const navigate = useNavigate()

  const loginNow = () => {
    dispatch(setAuth({ login, password }))
    navigate('/')
  }

  return (
    <Stack>
      <Input placeholder='Логин' onChange={loginHandler} />
      <Input placeholder='Пароль' onChange={passwordHandler} />
      <div>
        <Button variant='contained' onClick={loginNow}>
          {' '}
          Войти{' '}
        </Button>
        <Link to='/signup'>Зарегистрироваться</Link>
      </div>
    </Stack>
  )
}

export default Signin
