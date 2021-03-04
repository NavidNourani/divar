import React, {useState} from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Menu, { MenuProps } from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';




























// const StyledMenu = withStyles({

//     '& .MuiList-padding': {
//     paddingTop: '0',
//     paddingBottom: '0',
//   },
//   paper: {
//     border: '1px solid #d3d4d5',
//   },
// })((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//        '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);



// const useStyles = makeStyles({
//  hamburger: {
//    color: 'rgba(0,0,0,.56)',
//   display: 'none',
//    '&:hover': {
//     backgroundColor: 'rgba(0, 0, 0, 0)'
//    },
//  },
//  menuItem: {
//    root: {
//      paddingRight: 0,
//      fontSize: '.8rem'
//    }
//  }
// })

// export default function Hamburger() {
//  const classes = useStyles();

//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
//        <MenuIcon />
//       </IconButton>

//       <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <StyledMenuItem>
//           <ListItemText primary="دیوار من" />
//         </StyledMenuItem>

//         <StyledMenuItem>
//           <ListItemText primary="چت" />
//         </StyledMenuItem>

//         <StyledMenuItem>
//           <ListItemText primary="درباره ی دیوار" />
//         </StyledMenuItem>

//         <StyledMenuItem>
//           <ListItemText primary="بلاگ" />
//         </StyledMenuItem>

//         <StyledMenuItem>
//           <ListItemText primary="پشتیبانی" />
//         </StyledMenuItem>
//       </StyledMenu>
//     </div>
//   );
// }