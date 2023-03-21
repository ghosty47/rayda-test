import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardHeader: {
    border: "1px solid #EAECF0",
    borderRadius: "10px",
    padding: "8px",
  },
  imgContainer: {
    backgroundColor: "#F2F4F7",
    borderRadius: "10px",
    width: "250px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "80px",
    width: "100px",
    objectFit: "contain"
  },
  auctionTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: ".3em",
    paddingTop: "10px",
  },
  initials: {
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    backgroundColor: "#F2F4F7",
    fontSize: "14px",
    fontWeight: 600,
    color: "#475467",
  },
  productName: {
    width: "250px",
    wordWrap: "break-word",
  },
  productNameTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#101828",
  },
  currentBidTitle: {
    color: "#344054",
    fontSize: "12px",
    fontWeight: 300,
  },
  currentBid: {
    padding: "8px 0 5px 0"
  },
  btn: {
    marginTop: "15px !important",
    backgroundColor: "#004CCC !important",
    borderRadius: "8px !important",
    textTransform: "none !important",
  },
  nairaBid: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#101828",
  },
  topHeader: {
    fontSize: "12px",
    fontWeight: 700,
    paddingTop: "4px",
  },
  bidder: {
    color: "lightgrey",
    fontWeight: 100,
    fontSize: "12px",
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