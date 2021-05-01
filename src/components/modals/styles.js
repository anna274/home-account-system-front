import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    marginTop: theme.spacing(1),
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem'
  },
  select: {
    minWidth: 120,
  }
}));