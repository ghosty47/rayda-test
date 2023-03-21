import React from 'react'
import useStyles from './Banner.styles';
import { ReactComponent as BannerImage } from '../../resources/images/banner.svg';
import Logo from '../../resources/images/logo.svg';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


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
              <span className={classes.time} >
                  Starts in: 3 days : 2 hours : 24 minutes
              </span>
              <div className={classes.liveWrapper} >
                <div className={classes.mainDot} >
                  <div className={classes.dot} />
                  <span className={classes.notLive} >Not Live</span>
                </div>
                <span className={classes.layersAuction} >
                  Layers Auction
                </span>
              </div>
            </div>
          </div>
          <div className={classes.invitation} >
            <ThumbUpAltOutlinedIcon/>
            <span className={classes.acceptInt} >Accept Invitation</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;