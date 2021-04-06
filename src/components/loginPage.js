import React, { useState } from "react";
import {
  TextField,
  Paper,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { login } from "../loginReducer";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: window.innerHeight - 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  paperStyles: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function LoginPage(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

//   Validating username and password on submit and dispatching 
  const submitForm = () => {
    if (userName === "" || password === "") {
      setError("Fields are required");
      return;
    } else if (!(userName === "hruday@gmail.com" && password === "hruday123")) {
      setError("Incorrect username or password");
      return;
    } else {
      setError("");
      dispatch(
        login({
          userName: userName,
          password: password,
          loginStatus: true,
        })
      );
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paperStyles}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          Login
        </Typography>
        <form className={classes.form} autoComplete="off">
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            className="form-input"
            value={userName}
            style={{ marginBottom: "16px" }}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            className="form-input"
            type="password"
            value={password}
            style={{ marginBottom: "16px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="form-input"
            style={{ marginBottom: "16px" }}
            size="large"
            onClick={submitForm}
          >
            Login
          </Button>

          {(props.error || error) && (
            <Alert severity="error" onClick={() => setError(null)}>
              {props.error || error}
            </Alert>
          )}
        </form>
      </Paper>
    </div>
  );
}
