import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
    return {
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
        profile: {
            minHeight: '500px'
        }
    }
}
function UserProfile(props) {
    const {
        user, classes
    } = props

    if (user)
        return (<div className={classes.layout}>
            <div className={classes.profile}>
            User profile: {
                user.name
                } </div>
            </div>
        )
}

UserProfile.propTypes = {
    user: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfile)