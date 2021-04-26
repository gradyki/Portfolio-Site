import "./Spinner.css";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(5),
    },
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className="spinner-container">
      <div className={classes.root}>
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
      </div>
    </div>
  );
}
