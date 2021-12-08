import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

import * as s from './styles'

export function Login() {
  return (
    <s.LoginWrapper>
      <s.LoginPaper>
        <Grid container>
          <Grid item xs={12}>
            <Typography>Bem-vindo!</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField type="email" label="E-mail" margin="dense" />
          </Grid>
          <Grid item xs={12}>
            <TextField type="password" label="Senha" margin="dense" />
          </Grid>
          <Button variant="contained">Entrar</Button>
        </Grid>
      </s.LoginPaper>
    </s.LoginWrapper>
  )
}
