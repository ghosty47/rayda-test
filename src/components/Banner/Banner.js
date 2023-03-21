import React from 'react'
import useStyles from './Banner.styles';
import { ReactComponent as BannerImage } from '../../resources/images/banner.svg';
import Logo from '../../resources/images/logo.svg';


const Banner = () => {

  const classes = useStyles();

  return (
    <div className={classes.bannerWrapper} >
      <div className={classes.subBannerWrapper} >
        <div className={classes.bannerContainer} >
          <BannerImage className={classes.bannerImg}/>
        </div>
        <div className={classes.activity} >
          <div className={classes.logoTimerWrapper} >
            <img
              src={Logo}
              alt="logo"
              className={classes.logoClass}
            />
            <div className={classes.timer} >

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;