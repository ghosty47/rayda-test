import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bannerWrapper: {
    border: "1px solid #EAECF0",
    borderRadius: "10px",
    marginTop: "20px",
    // height: "260px",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 4px",
  },
  featuredHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "15px"
  },
  invitation: {
    border: "1px solid #EAECF0",
    borderRadius: "10px",
    // padding: "3px 8px 3px 8px",
    marginRight: "40px",
    gap: ".7em",
  },
  acceptInt: {
    fontSize: "10px",
    fontWeight: "700",
  },
  items: {
    fontSize: "16px",
    fontWeight: 700,
  },
  subBannerWrapper: {
    padding: "30px",
  },
  divider: {
    color: "black",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
});

export default useStyles;