import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  headline: {
    margin: theme.spacing(4, 0),
    textAlign: "center",
  },
  formRow: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(4),
  },
  label: {
    marginBottom: theme.spacing(1),
  },
  input: {
    padding: theme.spacing(1),
  },
  submit: {
    padding: theme.spacing(1, 4),
  },
}));

export const FormPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <h1 className={classes.headline}>Form Page</h1>
      <form>
        <div className={classes.formRow}>
          <label className={classes.label} htmlForm="externalName">
            External Name:{" "}
          </label>
          <input
            className={classes.input}
            type="text"
            id="externalName"
          ></input>
        </div>

        <div className={classes.formRow}>
          <label className={classes.label} htmlForm="internalName">
            Internal Name:{" "}
          </label>
          <input
            className={classes.input}
            type="text"
            id="internalName"
          ></input>
        </div>

        <div className={classes.formRow}>
          <label className={classes.label} htmlForm="category">
            Category:{" "}
          </label>
          <input className={classes.input} type="text" id="category"></input>
        </div>

        <div className={classes.formRow}>
          <button className={classes.submit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};
