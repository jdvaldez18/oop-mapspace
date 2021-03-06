import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginLeft: '1rem',
    marginTop:'.5rem',
    margin: 'auto',
    overflowY: 'auto',
    maxHeight:'450px',
  },
  list:{
    flexDirection: 'column',
    height:'100%',
    overflowY: 'auto',

  },
  listItem:{
    flexGrow:'1',
  }

});

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value =>
      React.cloneElement(element, {
          key: value,
      }),
  );
}

class TrendingPlacesList extends React.Component {

  
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>

          <div className={classes.list}>
              <List >
                  {generate(
                      <ListItem className={classes.listItem}>
                          <ListItemText
                              primary="Single-line item"
                          />
                      </ListItem>,
                  )}
              </List>
          </div>

  </Paper>
    );

  }
}
TrendingPlacesList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TrendingPlacesList);