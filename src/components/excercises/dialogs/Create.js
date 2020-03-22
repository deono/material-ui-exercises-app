import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  MenuItem
} from "@material-ui/core";

const Create = ({ open, setOpen, muscles, onCreate }) => {
  const initialState = {
    id: "",
    title: "",
    description: "",
    muscles: ""
  };

  const [state, setState] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // TODO: form validation

    // create the new object in App state
    onCreate(state);

    // clear out the state
    setState(initialState);

    //close the dialog
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a new Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            name="id"
            label="ID"
            type="text"
            fullWidth
            value={state.id}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={state.title}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            multiline
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={state.description}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            select
            fullWidth
            margin="dense"
            id="muscles"
            name="muscles"
            label="Select Muscle Group"
            value={state.muscles}
            onChange={handleChange}
            variant="outlined"
          >
            {muscles.map((item, idx) => {
              return (
                <MenuItem key={idx} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="secondary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Create;
