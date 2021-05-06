import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  link: {
    width: 'auto',
    overflow: 'hidden',
    fontSize: '1rem',
    boxSizing: 'border-box',
    minHeight: 48,
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
    letterSpacing: '0.00938em',
    paddingBottom: 6,
    textDecoration: 'none',
    color: 'black',
    padding: '10px 15px',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  }
}))
