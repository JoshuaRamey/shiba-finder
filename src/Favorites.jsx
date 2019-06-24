import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  card: {
    minWidth: 275,
    maxWidth: 350,
    textAlign: "center",
    margin: 10
    // position: "absolute"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  image: {
    width: 315,
    height: 315,
    objectFit: "cover"
  }
}));

export default function Favorites(props) {
  const classes = useStyles();

  return props.matches.map(dog => {
    return (
      <Card key={dog.image} className={classes.card}>
        <CardContent>
          <img className={classes.image} src={dog.image} alt="poop" />
          <Typography variant="h5" component="h2">
            {dog.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Distance: {dog.distance} Km
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Remove</Button>
          <Button size="small">Take a Walk</Button>
        </CardActions>
      </Card>
    );
  });
}
