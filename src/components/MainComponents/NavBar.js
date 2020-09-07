import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  useScrollTrigger,
  makeStyles,
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  Grid,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  ListItemIcon,
} from '@material-ui/core'
import { Home, Movie, Book, Forum } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory, useLocation } from 'react-router-dom'


const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

const appRoutes = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    icon: Home
  },
  {
    id: 2,
    name: 'Anime',
    path: '/anime',
    icon: Movie
  },
  {
    id: 3,
    name: 'Manga',
    path: '/manga',
    icon: Book
  },
  {
    id: 4,
    name: 'Forum',
    path: '/forum',
    icon: Forum
  },
]

const useStyles = makeStyles(theme => ({
  desktopMenu: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  mobileMenu: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
}))

const NavBar = (props) => {
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles()
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenuMobile = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenuMobile = () => {
    setAnchorEl(null)
  }
  const handleMenuMobileRoute = (path) => {
    history.push(path)
    setAnchorEl(null)
  }

  const MobileMenu = (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseMenuMobile}
      style={{ width: 200 }}
    >
      {appRoutes.map(({ id, name, path, icon: Icon }) => {
        const onFocus = location.pathname === path
        const currentTheme = (theme.palette.type === 'dark'
          ? 'white'
          : 'black'
        )
        const color = onFocus ? 'white' : currentTheme
        return (
          <MenuItem
            key={id}
            style={{
              backgroundColor: onFocus
                ? theme.palette.primary.main
                : 'transparent',
              color: color
            }}
            onClick={() => handleMenuMobileRoute(path)}
          >
            <ListItemIcon>
              <Icon fontSize='small' style={{ color }} />
            </ListItemIcon>
            <Typography variant='inherit' noWrap>
              {name}
            </Typography>
          </MenuItem>
        )
      })}
    </Menu>
  )
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Container maxWidth='xl'>
              <Grid container justify='space-between'>
                <Grid item>
                  <Typography variant="h6">Ngewibu</Typography>
                </Grid>
                <Grid item>
                  <div className={classes.desktopMenu}>
                    {appRoutes.map(({ id, name, path }) => (
                      <Button
                        key={id}
                        color='inherit'
                        variant={location.pathname === path ? 'outlined' : 'text'}
                        onClick={() => history.push(path)}
                      >
                        {name}
                      </Button>
                    ))}
                  </div>
                  <IconButton
                    className={classes.mobileMenu}
                    onClick={handleOpenMenuMobile}
                  >
                    <MenuIcon color='inherit' />
                  </IconButton>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {MobileMenu}
    </>
  )
}

export default NavBar
