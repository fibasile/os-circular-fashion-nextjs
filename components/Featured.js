// import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link'
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProjectCard from '../components/ProjectCard';


const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  grid: {
    paddingTop: theme.spacing.unit * 3,
  },
  layoutWrapper: {
    width: '100%'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  learnMore: {
    marginTop: theme.spacing.unit * 8,
  },
  learnMoreButton: {
    // color: theme.palette.secondary.dark
  }
});

const cards = [1, 2, 3, 4, 5, 6];


function LearnMoreBlock(props) {
    const {learnMore, classes, color} = props;
    let r = ''
  if (learnMore) { 
      r = (
        <div className={classes.learnMore}>
      <Link  href={learnMore}>
      <Button variant="contained" color={color} className={classes.learnMoreButton}>
          Load more...
      </Button>
      </Link>
      </div>
      )
  }
  return r
}
LearnMoreBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    learnMore: PropTypes.object.isRequired
}


function Featured(props) {
  const { classes,title,learnMore,backgroundColor} = props;
  return (
    <div className={classes.layoutWrapper} style={{backgroundColor: backgroundColor}}>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
          {title}
          </Typography>
          <Grid container className={classes.grid} spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={4}>
                <ProjectCard/>
              </Grid>
            ))}
          </Grid>
          <LearnMoreBlock learnMore={learnMore} classes={classes} />
        </div>
    </div>
  );
}

Featured.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  learnMore: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default withStyles(styles)(Featured);