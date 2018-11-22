import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {Typography} from '@material-ui/core';
import {Button} from '@material-ui/core';
import Link from 'next/link';
import purple from '@material-ui/core/colors/purple';


const style = (theme) => {
    return {
        aboutUnit: {
            width: '100%',
            paddingTop: theme.spacing.unit * 20,
            paddingBottom: theme.spacing.unit * 20,
            backgroundColor: purple[100]
        },
        learnMore: {
            marginTop: theme.spacing.unit * 8,
            color: 'primary'
        },
        blurb: {
            marginLeft: theme.spacing.unit * 20,
            marginRight: theme.spacing.unit * 20,
        }
    }
}


class AboutSection extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {classes} = this.props
        return (
            <div className={classes.aboutUnit}>
                <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                    About Fabricademy
                </Typography>
                <Typography className={classes.blurb} component="h3" variant="h5" align="center" color="textSecondary" gutterTop>
                Fabricademy is a transdisciplinary course that focuses on the development of new technologies applied in the textile industry, in its broad range of applications, from the fashion industry and the upcoming wearable market.
                </Typography>
                <Link href="https://textile-academy.org">
                  <Button color="primary" size="large" variant="contained" className={classes.learnMore}>Visit our website</Button>
                </Link>
            </div>
        )
    }

}


AboutSection.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(style)(AboutSection)