import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 btn: {
  padding: '.2rem 1.6rem',
  marginRight: '2rem',
  fontSize: '1.4rem',
  backgroundColor: '#a62626',
  color: '#fff', 
  boxShadow: 'none',
  fontFamily: 'Vazir',
   order: -1,


  '&:hover':{
  backgroundColor: '#be3737',
  boxShadow: 'none',
  }}
 }
);
const RedBtn = () => {
 const classes = useStyles();
 return (
  <>
   <Button variant = 'contained' className = {classes.btn}>ثبت آگهی</Button>
  </>
 )
}

export default RedBtn