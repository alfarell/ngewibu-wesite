import React, { useMemo } from 'react'
import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  Grid,
  Container
} from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { blue } from '@material-ui/core/colors';
import { NavBar } from './components';


const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = useMemo(() =>
    createMuiTheme({
      palette: {
        primary: blue,
        type: prefersDarkMode ? 'dark' : 'light',
      },
    }), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Router>
        <Grid container direction='column'>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item container>
            <Container maxWidth={false} style={{ paddingTop: 20, paddingBottom: 20 }}>
              <Routes />
            </Container>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  )
}

export default App
