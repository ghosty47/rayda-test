import { Container, CssBaseline } from '@material-ui/core';
import React from 'react'
import Banner from '../components/Banner/Banner';
import WelcomNav from '../components/WelcomNav/WelcomNav';
import useStyles from './MainPage.styles';

const MainPage = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <CssBaseline/>
      <Container className={classes.mainContainer} maxWidth="lg" >
        <WelcomNav/>
        <Banner/>
      </Container>
    </div>
  )
}

export default MainPage;