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
  mainContainer: {
    border: "1px solid red",
  },
  notify: {
    width: "20px",
    height: "20px",
  }
});

export default useStyles;