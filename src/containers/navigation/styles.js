import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    backgroundColor: "#400CCC",
    padding: "0 80px",
    "@media (max-width: 1000px)": {
      padding: "0 50px",
    },
    "@media (max-width: 670px)": {
      padding: "0 20px",
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media (max-width: 1000px)": {
      paddingLeft: "20px",
    },
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));