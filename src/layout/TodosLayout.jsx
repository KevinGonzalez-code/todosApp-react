import { Grid } from '@mui/material';
import { NavBar } from '../todos/components';

export const TodosLayout = ({ children }) => {
  return (
    <Grid  container sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <NavBar />
      <Grid item xs={6}>
        {children}
      </Grid>
    </Grid>
  )
}
