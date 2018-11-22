import { withStyles, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          &copy; 2018 - Fabricademy: A new Textile Academy
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          All rights reserved
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
