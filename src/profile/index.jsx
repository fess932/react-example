import { Button, Input, Stack } from '@mui/material'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const loginNow = () => {
    navigate('/')
  }

  const [password, setPassword] = useState('')
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  return (
    <Stack>
      <Input placeholder='Новый пароль' onChange={passwordHandler} />
      <Input placeholder='Новый аватар' />
      <Button variant='contained' onClick={loginNow}>
        Сохранить
      </Button>
    </Stack>
  )
}

export default Profile
