import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import Product from '../Product';
import useStyles from './FeaturedProducts.styles';

const FeaturedProducts = () => {

  const classes = useStyles();

  return (
    <div className={classes.bannerWrapper} >
      <div className={classes.subBannerWrapper} >
        <div className={classes.featuredHeader} >
          <Typography className={classes.items}>Featured Items</Typography>
          <div className={classes.invitation} >
            <span className={classes.acceptInt} >View Auction</span>
          </div>
        </div>
        <hr />
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <Grid key={value} item>
                <Product />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default FeaturedProducts;