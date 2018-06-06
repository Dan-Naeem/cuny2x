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

//buttons
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import FileUpload from '@material-ui/icons/FileUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import Save from '@material-ui/icons/Save';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      timeline: [],
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    var card = [];

    card.push(this.state.fname);


    card.push(this.state.lname);

    let updatedTime = this.state.timeline;
    updatedTime.push(card);

    this.setState({
      timeline: updatedTime
    })
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

              <CardHeader
                title="Form"
              />

            <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField
                  id="fname"
                  label="First Name"
                  value={this.state.name}
                  onChange={this.handleChange('fname')}
                  margin="normal"
                  style={styles.textField}
                />

                <TextField
                  id="lname"
                  label="Last Name"
                  value={this.state.name}
                  onChange={this.handleChange('lname')}
                  margin="normal"
                  style={styles.textField}
                />

              <Button type="submit" value="upload">Upload</Button>

              </form>

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
