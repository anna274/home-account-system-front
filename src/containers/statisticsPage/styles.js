import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  table: {
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tablesContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  settingsContainer: {
    maxWidth: 250,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px',
    marginBottom: 20,
  }
}));