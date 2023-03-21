import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '&::-webkit-scrollbar': {
      width: '.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: ' inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'darkgrey',
      outline: ' 1px solid slategrey',
    },
  },
});

export default useStyles;