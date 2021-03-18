import "./ProjectHome.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import skillz from "../../assets/Skillz.png";
import weather from "../../assets/Weather.png";
import expenses from "../../assets/Expenses.png";

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 550,
    margin: 50,
  },
  media: {
    height: 250,
  },
});

export default function ProjectHome() {
  const classes = useStyles();

  return (
    <div className="projects-section">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-cards-container">
        <div className="skillz">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={skillz}
                title="Skillz App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Technology
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Skills is a Full Stack/Full CRUD mock elearning platform with
                  full authentication. It is built with a Ruby on
                  Rails/PostgreSQL backend and React front end. Anyone is able
                  to browse the site, but authenticated users are able to login,
                  post new courses, edit and delete coures.
                </Typography>
                <Button size="small" color="primary">
                  See Code
                </Button>
                <Button size="small" color="primary">
                  Visit Site
                </Button>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>

        <div className="weather">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={weather}
                title="weather app"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Weather App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This weather app is a React app using the weatherstack.com
                  free api to gather current weather data. There is a built in
                  search bar at the top that will allow users to search any
                  location for current weather. I styled this site using
                  Bootstrap and converted all the dates and times to laocal and
                  Celsius reading to Fahrenheit. There is also some conditional
                  rendering depending on if the city search is during night or
                  daytime hours.
                </Typography>
                <Button size="small" color="primary">
                  See Code
                </Button>
                <Button size="small" color="primary">
                  Visit Site
                </Button>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>

        <div className="expenses">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={expenses}
                title="Expense App"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Expense Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Expense Tracker is a React App that allows users to input
                  their personal and work expenses. It takes in 4 different data
                  types including a type select and uses the data to fill in the
                  table. All of the categories are sortable with onClick
                </Typography>
                <Button size="small" color="primary">
                  See Code
                </Button>
                <Button size="small" color="primary">
                  Visit Site
                </Button>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
