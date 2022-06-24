
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const NavBar = () => {
  return (
    <AppBar
      position='fixed'
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
        >
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div'> TodosApp </Typography>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}
