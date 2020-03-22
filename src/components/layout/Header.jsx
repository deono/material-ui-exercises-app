import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Create from "../excercises/dialogs/Create";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ muscles, onCreate }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit" className={classes.title}>
          Excercise Database
        </Typography>
        <Button size="large" onClick={() => setOpen(true)}>
          <AddCircleRoundedIcon fontSize="large" color="secondary" />
        </Button>
        <Create
          muscles={muscles}
          open={open}
          setOpen={setOpen}
          onCreate={onCreate}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
