import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { styles } from './styles/styles.js'

//app bar
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//text fields
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

//import card
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// text field
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  handleChange() {

  }

  render() {
    return (
      <div style={styles.app}>

        <AppBar position="static" style={styles.appHeader} >
          <Toolbar>
            <Typography variant="title" color="inherit" >
              News Feed
            </Typography>
          </Toolbar>
        </AppBar>

        <div style={styles.main}>

          <div style={styles.left}>
            <Card style={styles.card}>
              <FormControl style={styles.card}>

                <Input style={styles.textField} id="name-simple" value={this.state.name} onChange={this.handleChange} />
                <FormHelperText id="name-helper-text">Name</FormHelperText>

                <Input style={styles.textField} id="name-helper" value={this.state.name} onChange={this.handleChange} />
                <FormHelperText id="name-helper-text">Some important helper text</FormHelperText>

                <Input style={styles.textField} id="name-disabled" value={this.state.name} onChange={this.handleChange} />
                <FormHelperText>Disabled</FormHelperText>

              </FormControl>
            </Card>
          </div>

          <div style={styles.right}>
            <Card style={styles.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" >
                    R
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia

                image="/static/images/cards/paella.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with
                  your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions  disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
