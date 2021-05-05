import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  page: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  addButton: {
    marginTop: '1rem',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
    '& > *': {
      marginRight: 20,
      '&:last-child': {
        marginRight: 0,
      }
    }
  },
  settingsItem: {
    padding: '2rem 4rem',
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    transition: 0.3,
    color: 'white'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem'
  },
}));