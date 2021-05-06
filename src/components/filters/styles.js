import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    marginTop: 80,
  },
  select: {
    minWidth: 150,
    margin: 0,
    marginRight: 10,
  },
}));