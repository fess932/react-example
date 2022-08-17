import { Button, Input, Stack } from '@mui/material'
import React, { useState } from 'react'

function Signup() {
  const [password, setPassword] = useState('')
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  return (
    <Stack>
      <Input placeholder='Почта' onChange={passwordHandler} />
      <Input placeholder='Пароль' />
      <Button variant='contained'> Зарегистрироваться </Button>
    </Stack>
  )
}

export default Signup
