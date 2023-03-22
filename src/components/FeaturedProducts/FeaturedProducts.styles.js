import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bannerWrapper: {
    border: "1px solid #EAECF0",
    borderRadius: "10px",
    marginTop: "20px",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 4px",
    marginBottom: "15px",
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
    padding: "5px 12px 5px 12px",
    "&: hover": {
      backgroundColor: "#004CCC !important",
      color: "#ffffff !important",
    },
  },
  acceptInt: {
    fontSize: "11px",
    fontWeight: "700",
    cursor: "pointer",
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
    marginTop: "10px",
  },
  mainProduct: {
    "& :hover": {
      transform: "scale(1.01) perspective(0px)",
    },
  },
});

export default useStyles;