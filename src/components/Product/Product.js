import React from "react";
import useStyles from "./Product.styles";
import { Button, Divider, Typography } from "@material-ui/core";
import getInitials from "../../utils";

const Product = ({ data }) => {

  console.log(data);
  const classes = useStyles();

  return (
    <div className={classes.cardHeader}>
      <div className={classes.imgContainer}>
        <img src={data?.image} alt="electronics" className={classes.img} />
      </div>
      <div className={classes.auctionTitle}>
        <div className={classes.initials}> { getInitials(data) } </div>
        <p className={classes.topHeader}>
          { data?.name }  <span className={classes.bidder}>(Highest Bidder)</span>
        </p>
      </div>
      <div className={classes.productName}>
        <Typography className={classes.productNameTitle}>
          { data?.title }
        </Typography>
      </div>
      <div className={classes.currentBid}>
        <Typography className={classes.currentBidTitle}>
          Current Bid: <span className={classes.nairaBid}>{ data?.bid }</span>
        </Typography>
      </div>
      <Divider className={classes.hr}/>
      <Button className={classes.btn} fullWidth variant="contained" color="primary">
        Add to wishlist
      </Button>
    </div>
  );
};

export default Product;
