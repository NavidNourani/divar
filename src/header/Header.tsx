import React, {useState} from 'react';

import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

import RedBtn from './RedBtn'; 

import { withStyles } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#fff',
      boxShadow: ' 0 1px 1px 0 rgba(0,0,0,.08)',
    },
    toolbar: {
      minHeight: '52px',
    },
    nav: {
       width: '100%',
    },
    btn:{
     fontFamily: 'Vazir',
     fontSize: '1.3rem', 
     color: 'rgba(0,0,0,.56)',
     marginRight: '.6rem',
     padding: '.2rem 1.8rem',
     '&:hover': {
     color: 'rgba(0,0,0,.86)',
     borderRadius: '.3rem',
   }
  },
  locationIcon: {
     marginLeft: '.4rem',
     color: 'rgba(0,0,0,.56)',
   },
  logo: {
    width: '4rem',
    height: '4rem',
    background: 'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMjUuNiA3Ni40IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOiNjMTBjMWF9PC9zdHlsZT48ZyBpZD0iWE1MSURfM18iPjxnIGlkPSJYTUxJRF83XyI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTk5LjUgNjIuM2MtMS43IDAtMy4zLTEuMS0zLjgtMi44LS43LTIuMS41LTQuNCAyLjYtNSAxOC45LTYgMTkuMi0xMC42IDE5LjMtMTMuMS4yLTMuOS0yLjgtOC45LTQtMTAuNi0xLjMtMS44LS45LTQuMy45LTUuNiAxLjgtMS4zIDQuMy0uOSA1LjYuOS42LjggNiA4LjMgNS41IDE1LjgtLjUgOS4xLTcuNSAxNC43LTI0LjkgMjAuMy0uNCAwLS44LjEtMS4yLjF6IiBpZD0iWE1MSURfMjZfIi8+PC9nPjxnIGlkPSJYTUxJRF84XyI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1LjIgNzYuNGMtMS4yIDAtMi40LS41LTMuMS0xLjUtMS40LTEuNy0xLjEtNC4zLjctNS42QzUxIDYyLjggNTYuNSA1NyA2MC4xIDUxLjljLTItMS00LjEtMi41LTUuMi01LTEtMi4zLTEuNi02LjEgMS45LTExLjIgNS03LjQgMTAtOS4xIDExLjktOS41IDIuNi0uNSA1LjEgMSA1LjggMy41LjUgMS44IDEuNyA3LjUtMS45IDE2LjIgNC44LS4xIDguNi0xLjQgMTEuNS0zLjhDODkuNyAzNy42IDkwIDMwIDkwIDI5LjljLjEtMi4yIDEuOS0zLjkgNC4xLTMuOSAyLjIuMSAzLjkgMS45IDMuOSA0LjEgMCAuNC0uNCAxMS4xLTguNyAxOC4xLTUuMiA0LjQtMTIuMyA2LjMtMjAuOSA1LjYtNC4xIDYuMy0xMC42IDEzLjctMjAuNyAyMS43LS44LjYtMS42LjktMi41Ljl6TTY2LjkgMzZjLTEuMS45LTIuMyAyLjItMy42IDQuMi0xLjMgMi0xLjQgMy4xLTEuMyAzLjQuMi41IDEuMiAxIDIuMiAxLjQgMS45LTMuOCAyLjUtNi44IDIuNy05eiIgaWQ9IlhNTElEXzIzXyIvPjwvZz48ZyBpZD0iWE1MSURfOV8iPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Mi4yIDU0LjloLS42Yy0yLjItLjMtMy43LTIuNC0zLjQtNC42IDIuNy0xNy44IDMuNi00Ni4yIDMuNi00Ni40LjItMi4yIDEuOS00IDQuMi0zLjkgMi4yLjEgMy45IDEuOSAzLjkgNC4xIDAgMS4yLTEgMjkuMS0zLjcgNDcuNC0uMyAyLTIgMy40LTQgMy40eiIgaWQ9IlhNTElEXzIyXyIvPjwvZz48ZyBpZD0iWE1MSURfMTFfIj48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNCA3Ni40Yy0xLjIgMC0yLjUtLjYtMy4yLTEuNi0xLjMtMS44LS45LTQuMy45LTUuNiAyMi4xLTE2LjEgMjMuMS0zNi42IDIzLjEtMzcuNC4xLTIuMiAxLjktNCA0LjEtMy45IDIuMi4xIDMuOSAxLjkgMy45IDQuMSAwIDEtMSAyNS4yLTI2LjQgNDMuNy0uOC41LTEuNi43LTIuNC43eiIgaWQ9IlhNTElEXzIxXyIvPjwvZz48ZyBpZD0iWE1MSURfMTNfIj48cGF0aCBkPSJNNzEuOSA2OGMtMi4xIDAtMy45LTEuNy00LTMuOS0uMS0yLjIgMS42LTQuMSAzLjgtNC4yLjEgMCA2LjQtLjMgMTUuMy0yLjIgMi4yLS41IDQuMy45IDQuOCAzLjFzLS45IDQuMy0zLjEgNC44Qzc5LjEgNjcuOCA3Mi40IDY4IDcyLjEgNjhoLS4yeiIgZmlsbD0iIzU3NTc1NiIgaWQ9IlhNTElEXzIwXyIvPjwvZz48L2c+PC9zdmc+) no-repeat 50%!important',
 },
 link: {
  color: '#000',
  padding: '.7rem',
  fontSize: '1.2rem', 
  fontWeight: 500,

  '&:hover': {
     textDecoration: 'none',
     color: 'rgba(0,0,0,.56)',
   }
 },
 hamburger: {
   color: 'rgba(0,0,0,.56)',
   '&:hover': {
     borderRadius: 'none',
     backgroundColor: 'rgba(0,0,0,0)',
   },
 }
 ,
 
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
);

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderRadius: '.3rem',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    width: '10rem',
    textAlign: 'right',
       '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
  
}))(MenuItem);


export default function Header() {
 const classes = useStyles();

 const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



const renderMobileMenu = (
  <div className = {classes.sectionMobile}>
      <IconButton className = {classes.hamburger} edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
       <MenuIcon />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="دیوار من" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText primary="چت" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText primary="درباره ی دیوار" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText primary="بلاگ" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemText primary="پشتیبانی" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
)

  return (
    <React.Fragment>
      <div>
        <AppBar className = {classes.root}>
          <Toolbar className = {classes.toolbar}>
            <nav className = {classes.nav}>
              <Box display ='flex' justifyContent ='space-between'>
                <Box display ='flex' alignItems = 'center'>
                  <a target = '_self' href="/" className = {classes.logo}></a>
                  <IconButton className={classes.btn}>
                    <LocationOnIcon className={classes.locationIcon}/>
                  تهران
                  </IconButton>
                </Box>

                <Box display ='flex' alignItems = 'center'>
                  <Box display ='flex' order = '-2' color= '#000' className = {classes.sectionDesktop}>
                    <Link className = {classes.link}>دیوار من</Link>
                    <Link className = {classes.link}>چت</Link>
                    <Link className = {classes.link}>درباره ی دیوار</Link>
                    <Link className = {classes.link}>بلاگ</Link>
                    <Link className = {classes.link}>پشتیبانی</Link>
                  </Box>
                  {renderMobileMenu}
                  <RedBtn />
                </Box>
              </Box>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
      <Toolbar />
      <Container>
        <Box my={2}>   text    </Box>
      </Container>
    </React.Fragment>
  );
}