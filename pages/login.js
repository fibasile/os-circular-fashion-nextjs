import { withStyles, Typography } from "@material-ui/core";
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = theme => ({
    root: {
        textAlign: 'center',
        width: '100%',
      },
})

function Login(props){
    const {classes} = props
    return (
        <div className={classes.root}>
            <Header/>
            <Typography variant="h4" gutterBottom>
            Sign in
            </Typography> 
            <Footer/>
        </div>
    )
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Login)