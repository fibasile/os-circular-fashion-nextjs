// import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import { Paper } from '@material-ui/core';
import Link from 'next/link';

const styles = theme => ({
  root: {
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
});

const categories = [
    {key: 'all', label: 'All'},
    {key: 'modular', label: 'Modular'},
    {key: 'patterns', label: 'Patterns'},
    {key: 'recipes', label: 'Recipes'}
]

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}




function CategoryLink(props){
    const {category} = props
    // console.log(category)
 const target = {pathname: '/projects', query: { category: category.key }}
 return (
  <Link href={target}>
     <ListItemLink>
        <ListItemText primary={category.label} />
      </ListItemLink>
  </Link>
  )
}
CategoryLink.propTypes = {
    category: PropTypes.object.isRequired
}

function CategoryList(props) {
  const { classes } = props;


  return (
    <Paper className={classes.root}>
      <List component="nav">
      <ListItem>
          <ListItemText primary="CATEGORIES"/>
      </ListItem>
      </List>
      <Divider />
      <List component="nav">
      {categories.map((cat)=>{
          return (
            <CategoryLink category={cat} key={cat.key} />
          )
        })}
      </List>
      </Paper>
  );
}

CategoryList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryList);
