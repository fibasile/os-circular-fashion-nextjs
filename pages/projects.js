import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ProjectFilterForm from '../components/ProjectFilterForm';
// import ProjectFilterTabs from "../components/ProjectFilterTabs";
import ProjectsFilterBar from '../components/ProjectsFilterBar'
import { withRouter } from "next/router";
import ProjectCard from '../components/ProjectCard';

// import CategoryList from "../components/CategoryList";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  grid: {
    paddingTop: theme.spacing.unit * 3
  },

  layout: {
    width: "auto",

    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,

    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Projects(props) {
  let { classes, router } = props;
  console.log(router.query);
  const filter = router.query.filter || "all";
  const category = router.query.category || null;


  return (
    <React.Fragment>
      <Header />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
        <ProjectsFilterBar />
              <Grid container className={classes.grid} spacing={40}>
                {cards.map(card => (
                  <Grid item key={card} sm={6} md={6} lg={4}>
                    <ProjectCard />
                  </Grid>
                ))}
              </Grid>

        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Projects));
