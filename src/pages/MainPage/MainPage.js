import { Container, CssBaseline } from '@material-ui/core';
import React from 'react'
import useStyles from "./MainPage.styles";
import WelcomNav from "../../components/WelcomNav";
import Banner from "../../components/Banner";
import FeaturedProducts from "../../components/FeaturedProducts";

const MainPage = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <CssBaseline/>
      <Container className={classes.mainContainer} maxWidth="lg" >
        <WelcomNav/>
        <Banner/>
        <FeaturedProducts/>
      </Container>
    </div>
  )
}

export default MainPage;