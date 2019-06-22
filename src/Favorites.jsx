import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            Distance: (x) Km
          </Typography>
          <Fab
            color="primary"
            aria-label="Add"
            className={classes.fab}
            onClick={() => props.dislike(dog)}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Fab>
          <Fab
            color="secondary"
            aria-label="Edit"
            className={classes.fab}
            onClick={() => props.favorite(dog)}
          >
            <FontAwesomeIcon icon={faHeart} size="2x" />
          </Fab>
        </CardContent>
      </Card>
    );
  });
}
