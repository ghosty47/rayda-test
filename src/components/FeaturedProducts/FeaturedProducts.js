import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import Product from '../Product';
import useStyles from './FeaturedProducts.styles';
import { useGetAllProductsQuery } from '../../features/apiSlice';
import Loader from '../Loader';

const FeaturedProducts = () => {

  const { data, isLoading } = useGetAllProductsQuery();

  const [products, setProduct] = useState([data])

  console.log(data);

  const classes = useStyles();

  if ( isLoading ) return <Loader/>

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
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container className={classes.mainProduct} spacing={2}>
            {products?.map((product, index) => (
              <Grid item>
                <Product product={product} key={index} />
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