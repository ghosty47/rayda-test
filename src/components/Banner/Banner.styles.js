import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bannerWrapper: {
    border: "1px solid #EAECF0",
    borderRadius: "10px",
    marginTop: "30px",
    height: "260px",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 4px",
  },
  subBannerWrapper: {
    padding: "20px",
  },
  activity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    top: -40
  },
  logoTimerWrapper: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    
  },
  timer: {
    paddingTop: "28px",
  },
  mainDot: {
    backgroundColor: "#FFFAEB",
    padding: "3px 8px 3px 8px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".3em",
  },
  time: {
    fontSize: "22px",
    fontWeight: 700,
  },
  liveWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: ".7em",
  },
  dot: {
    height: "8px",
    width: "8px",
    backgroundColor: "#F79009",
    borderRadius: "50%",
  },
  notLive: {
    paddingTop: "2px",
    color: "#F79009",
    fontSize: "11px",
    fontWeight: 500,
  },
  bannerContainer: {
    width: "200px"
  },
  layersAuction: {
    paddingTop: "4px",
    color: "grey",
    fontSize: "12px",
    fontWeight: 300,
  },
  logoClass: {
    width: "120px",
    height: "120px",
  },
  invitation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #EAECF0",
    borderRadius: "10px",
    padding: "3px 8px 3px 8px",
    marginRight: "40px",
    gap: ".7em",
    cursor: "pointer"
  },
  acceptInt: {
    fontSize: "10px",
    fontWeight: "700",
  },
}));

export default useStyles;