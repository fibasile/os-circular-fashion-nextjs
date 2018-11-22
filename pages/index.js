/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
// import red from '@material-ui/core/colors/red';

const styles = (/*theme*/) => ({

  root: {
    textAlign: 'center',
    width: '100%',
  }
  
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    // const { open } = this.state;
    const featuredPage = { pathname: '/projects', query: {filter: 'featured'} }
    const latestPage = { pathname: '/projects', query: {filter: 'latest'}}
    return (
      <div className={classes.root}>
        <Header />
        <HomeHero/>
        <Featured title={'Featured projects'}  backgroundColor="#fcfcff" learnMore={featuredPage}/>
        <AboutSection/>
        <Featured title={'Latest projects'} backgroundColor="#e91e63" learnMore={latestPage}/>
        <Footer/>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
