import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from '@material-ui/core/Typography';
import { withRouter } from 'next/router'

const filters = [
  { key: "all", label: "All" },
  { key: "latest", label: "Latest" },
  { key: "featured", label: "Featured" },
  { key: "popular", label: "Popular" }
];

const styles = (/*theme*/) => ({
  root: {
    flexGrow: 1
    //   backgroundColor: theme.palette.background.paper,
  }
});

class ProjectFilterTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount() {
    filters.forEach(({ key }, index) => {
      if (this.props.filter && this.props.filter === key) {
        this.setState({ value: index });
      }
    });
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        {value}
        <Tabs value={value} onChange={this.handleChange}>
          {filters.map(f => {
            const { label, key } = f;
            return <Tab label={label} key={key} />;
          })}
        </Tabs>
      </div>
    );
  }
}

ProjectFilterTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ProjectFilterTabs));
