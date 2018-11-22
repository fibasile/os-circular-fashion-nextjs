import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const styles = (/*theme*/) => {
 

}

class CategoryChooser extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            anchorEl: null
        }
    }

    handleClick(event){
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose(){
        this.setState({ anchorEl: null });
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="inherit"
                >
                Categories
            </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>All projects</MenuItem>
                    <MenuItem onClick={this.handleClose}>Modular</MenuItem>
                    <MenuItem onClick={this.handleClose}>Patterns</MenuItem>
                    <MenuItem onClick={this.handleClose}>Recipes</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(CategoryChooser);