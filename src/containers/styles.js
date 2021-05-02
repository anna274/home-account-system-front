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
    marginTop: '5rem'
  },
}));