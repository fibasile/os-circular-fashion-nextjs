
// import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heroUnit: {
        // backgroundColor: theme.palette.background.paper,
        backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(/static/frank-wang-1092695-unsplash.jpg)',
    },
    heroWrapper: {
        paddingTop: `${theme.spacing.unit * 6}px`,
        backgroundColor: 'rgba(255, 255, 240, 0.8)',
        width: '100%'
    },
    heroContent: {
        
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    },
})


function HomeHero(props){
    const {classes} = props

    return (
        <div className={classes.heroUnit}>
        <div className={classes.heroWrapper}>
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Open Source<br/> Circular Fashion
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Welcome to the Fabricademy Open Source Circular fashion catalogue.
          Browse and share your designs and help grow the library!
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item>
              <Link href={{ pathname: '/projects', query: { filter: 'all' } }}>
                <Button variant="contained" color="primary">
                 Browse the catalogue
                </Button>
                </Link>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Upload a project
                </Button>
              </Grid>
            </Grid>
          </div>
          </div>
        </div>
      </div>
    )
}

export default withStyles(styles)(HomeHero)