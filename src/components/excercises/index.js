import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
// import { muscles } from "../../store";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
    height: 500,
    overflowY: "auto"
  }
}));

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome",
    description = "Please select an exercise from the list on the left"
  }
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm>
        <Paper className={classes.paper}>
          {exercises.map(([muscles, exercises]) => {
            // display ALL if the category is falsy OR
            // display the category matching the muscle group
            return !category || category === muscles ? (
              <React.Fragment key={muscles}>
                <Typography
                  key={muscles}
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {muscles}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => {
                    return (
                      <ListItem onClick={() => onSelect(id)} key={id} button>
                        <ListItemText primary={title} />
                      </ListItem>
                    );
                  })}
                </List>
              </React.Fragment>
            ) : // otherwise display null
            null;
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className={classes.paper}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
