import React, { useState } from "react";

import {
  Box,
  Typography,
  makeStyles,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { green, blue } from "@material-ui/core/colors";

import List from "../student/List";
import axios from "axios";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: blue[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});
const Home = () => {
  const classes = useStyles();
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });
  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3004/students`, student);
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return <Home />;
  }
  return (
    <>
      <Box textAlign="center" className={classes.headingColor} mb={2}>
        <Typography variant="h3">Student Management</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={12} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Add Student</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={12} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
