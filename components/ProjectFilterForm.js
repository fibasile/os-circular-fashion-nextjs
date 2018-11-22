import { withStyles, Typography, Button } from "@material-ui/core";
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from "next/link";
// import CategoryChooser from '../components/CategoryChooser';
// import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit ,
        paddingBottom: theme.spacing.unit,
    },
    grow: {
        flexGrow: 1
    },
    filterBox: {
    },
    filterLabel: {
        color: theme.palette.text.secondary,
        padding: theme.spacing.unit
    },
    selected: {
        color: 'primary'
    },
    normal: {
        color: 'secondary'
    }
})

const filters = [
    { key: 'all', label: 'All'},
    { key: 'latest', label: 'Latest'},
    { key: 'popular', label: 'Popular'},
    { key: 'featured', label: 'Featured'}
]


class ProjectFilterForm extends React.Component {
    constructor(props){
        super()
        this.props = props
    }
    render(){

    

        const {classes,filter} = this.props

        const buildLink = (filter)=>{
            return {
                pathname: 'projects',
                query: {
                    filter
                }
            }
        }


        const filterLink = (filter, label, currentFilter) =>{
            return (
                <Grid item key={filter}>
                <Link href={buildLink(filter)}>
               <Button color={`${filter === currentFilter ? 'primary': 'secondary'}`}>
                   {label}
               </Button>
               </Link>
               </Grid>
            )
        }

        return (
 
            <div className={classes.root}>
            <Grid container spacing={8} className={classes.filterBox}>
                <Grid item>
                   <Typography  variant="button" gutterBottom className={classes.filterLabel}>Filter:
                   </Typography> 
               </Grid>
               { filters.map((f)=>{
                   return filterLink(f.key, f.label, filter )
               })}
               
            </Grid>
            </div>            
           
        )
    }
}

ProjectFilterForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ProjectFilterForm);