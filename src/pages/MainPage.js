import { Container, CssBaseline } from '@material-ui/core';
import React from 'react'
import useStyles from './MainPage.styles';

const MainPage = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <CssBaseline/>
      <Container className={classes.mainContainer} maxWidth="lg" >


      </Container>
    </div>
  )
}

export default MainPage;