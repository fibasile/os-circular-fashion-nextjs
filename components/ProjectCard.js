import { withStyles , CardActionArea} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from '@material-ui/core/Avatar';
import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "100%" // 16:9
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing.unit
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatarName: {
    padding: theme.spacing.unit
  }
});

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: 1
    }
  }

  onMouseOver = () => this.setState({ shadow: 3 });
  onMouseOut = () => this.setState({ shadow: 1 });

  render() {
    const {
      props,
    } = this;

    const { classes } = props;
    const imgURL = 'http://placehold.it/512x512'
    const shadow = this.state.shadow

     return (
      <Card className={classes.card}
      onMouseOver={this.onMouseOver}
      onMouseOut={this.onMouseOut}
      raised={this.state.shadow > 1}
      {...this.props}>
        <CardMedia
        component="img"
          
          className={classes.media}
          image={imgURL}
          title="Image title"
        />       

        <CardActions>
          <div className={classes.row}>
            <Avatar src="http://placehold.it/128x128"></Avatar>
          <Typography className={classes.avatarName} variant="subtitle1">
            Lizard
          </Typography>
       
          </div>
        </CardActions>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard)
