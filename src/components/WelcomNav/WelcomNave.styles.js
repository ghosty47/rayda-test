import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  welcomNavBar: {
    // border: "1px solid green",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "2em",
    paddingBottom: "1em",
  },
  welcomeHeader: {
    fontSize: "22px",
    fontWeight: 700,
  },
  subHeader: {
    color: "grey",
    fontSize: "12px",
    fontWeight: 300,
  },
  notify: {
    width: "20px",
    height: "20px",
  }
});

export default useStyles;