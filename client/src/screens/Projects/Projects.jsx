import "./Projects.css";
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
    boxShadow: "0 3px 5px 2px rgb(0, 119, 182)",
  },
  media: {
    height: 250,
  },
});

export default function Projects() {
  const classes = useStyles();
  return (
    <div className="projects-page">
      <div className="projects-section">
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
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Skills is a Full Stack/Full CRUD mock elearning platform
                    with full authentication. It is built with a Ruby on
                    Rails/PostgreSQL backend and React front end. Anyone is able
                    to browse the site, but authenticated users are able to
                    login, post new courses, edit and delete coures.
                  </Typography>
                  <div className="home-buttons">
                    <a href="https://github.com/gradyki/Skillz" target="_blank">
                      <Button size="small" color="primary">
                        See Code
                      </Button>
                    </a>
                    <a
                      href="https://laughing-einstein-b353ef.netlify.app/"
                      target="_blank"
                    >
                      <Button size="small" color="primary">
                        Visit Site
                      </Button>
                    </a>
                  </div>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This weather app is a React app using the weatherstack.com
                    api to gather current weather data. There is a built in
                    search bar at the top that will allow users to search any
                    location for current weather.
                  </Typography>
                  <div className="home-buttons">
                    <a
                      href="https://github.com/gradyki/Weather-App"
                      target="_blank"
                    >
                      <Button size="small" color="primary">
                        See Code
                      </Button>
                    </a>
                    <a
                      href="https://flamboyant-nightingale-ad12ec.netlify.app/"
                      target="_blank"
                    >
                      <Button size="small" color="primary">
                        Visit Site
                      </Button>
                    </a>
                  </div>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Expense Tracker is a React App that allows users to input
                    their personal and work expenses. It takes in 4 different
                    data types including a type select and uses the data to fill
                    in the table. All of the categories are sortable with
                    onClick
                  </Typography>
                  <div className="home-buttons">
                    <a
                      href="https://github.com/gradyki/Expense-Tracker-Site"
                      target="_blank"
                    >
                      <Button size="small" color="primary">
                        See Code
                      </Button>
                    </a>
                    <a
                      href="https://stoic-williams-437bf3.netlify.app/"
                      target="_blank"
                    >
                      <Button size="small" color="primary">
                        Visit Site
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </CardActionArea>

              <CardActions></CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
