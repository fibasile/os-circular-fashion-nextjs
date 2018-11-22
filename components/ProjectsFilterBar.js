import { Component } from "react";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import { withStyles, InputLabel } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

const styles = theme => {
  return {
    root: {
      // flexGrow: 1,
      height: "auto"
    },
    paper: {
      padding: theme.spacing.unit
    },
    filterLabel: {
      flexGrow: 1,
      textAlign: "right"
    },
    categoryLabel: {
      flexGrow: 1,
      textAlign: "right"
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 150
    },
    formControlButton: {
      margin: theme.spacing.unit,
      minWidth: 100,
      marginTop: theme.spacing.unit * 1.5
    }
  };
};

const categories = [
  { key: "all", label: "All" },
  { key: "modular", label: "Modular" },
  { key: "patterns", label: "Patterns" },
  { key: "recipes", label: "Recipes" }
];

class ProjectsFilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "all", category: "all" };
    this.handleChange = this.handleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleChange(event) {
    this.setState({ filter: event.target.value});
  }
  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Grid container spacing={8}>
          <Grid item>
            <FormControl  className={classes.formControl}>
              <InputLabel htmlFor="select-filter">Filter</InputLabel>
              <Select
               
                value={this.state.filter}
                onChange={this.handleChange}
                inputProps={{
                  name: "filter",
                  id: "select-filter"
                }}
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"latest"}>Latest</MenuItem>
                <MenuItem value={"featured"}>Featured</MenuItem>
                <MenuItem value={"popular"}>Popular</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-category">Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleCategoryChange}
                inputProps={{
                  name: "category",
                  id: "select-category"
                }}
              >
                {categories.map(c => {
                  return (
                    <MenuItem key={c.key} value={c.key}>
                      {c.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item style={{flexGrow: 1}}>
          
          </Grid>
          <Grid item>
          <FormControl className={classes.formControlButton}>
                <Button color="primary" variant="contained">Apply</Button>
          </FormControl>
          </Grid>
          <Grid item>
          <FormControl className={classes.formControlButton}>
                <Button variant="outlined">Clear filter</Button>
          </FormControl>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(ProjectsFilterBar);
