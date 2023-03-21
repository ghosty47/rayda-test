import React from "react";
import useStyles from "./Product.styles";
import LaptopImage from "../../resources/images/laptop.png";
import { Button, Divider, Typography } from "@material-ui/core";

const Product = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardHeader}>
      <div className={classes.imgContainer}>
        <img src={LaptopImage} alt="electronics" className={classes.img} />
      </div>
      <div className={classes.auctionTitle}>
        <div className={classes.initials}>KO</div>
        <p className={classes.topHeader}>
          Korey Okumus  <span className={classes.bidder}>(Highest Bidder)</span>
        </p>
      </div>
      <div className={classes.productName}>
        <Typography className={classes.productNameTitle}>
          Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model - Rose Gold
        </Typography>
      </div>
      <div className={classes.currentBid}>
        <Typography className={classes.currentBidTitle}>
          Current Bid: <span className={classes.nairaBid}>N500,000</span>
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
