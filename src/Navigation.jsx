import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // maxWidth: 500,
    width: "100%"
  }
});

export default function Navigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          icon={<FontAwesomeIcon icon={faHome} size="lg" />}
          aria-label="Home"
          onClick={() => props.dogView()}
        />
        <Tab
          icon={<FavoriteIcon />}
          aria-label="Favorite"
          onClick={() => props.favoritesView()}
        />
      </Tabs>
    </Paper>
  );
}
