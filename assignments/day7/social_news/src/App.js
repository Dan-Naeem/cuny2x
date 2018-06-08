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

//dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      photoURL: "",
      caption: "",
      tags: "",
      location: "",
      date: new Date(),
      liked: false,
      timeline: [],
      open: false,
    };
  }

  handleChange = title => event => {
    this.setState({
      [title]: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    var card = [];

    card.push(this.state.title);
    console.log("title: ", this.state.title);

    card.push(this.state.photoURL);
    console.log("photoURL: ", this.state.photoURL);

    card.push(this.state.caption);
    console.log("caption: ", this.state.caption);

    card.push(this.state.tags);
    console.log("tags: ", this.state.tags);

    card.push(this.state.location);
    console.log("location: ", this.state.location);

    let date = this.state.date;
    date = date.toString();
    date = date.slice(3, 24);
    card.push(date);
    console.log("date: ", this.state.date);

    let updatedTime = this.state.timeline;
    updatedTime.unshift(card);

    this.setState({
      timeline: updatedTime,
      open: false
    })
    //console.log("handleSubmit timeline: ", this.timeline[0][0]);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLike = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    const timeline = this.state.timeline;
    const label = this.state.liked ? 'Unlike' : 'Like'
    const allEvents = timeline.map((item, i) => (
      <Card key={i} style={styles.card}>
        <CardHeader
          avatar={
            <div>
              <h1>
                {item[0]}
              </h1>
              <h5>{item[5]}</h5>
            </div>
          }
        />
      <div style={styles.imgContainer}>
          <img style={styles.img} src={item[1]} />
        </div>
        <div style={styles.description}>
          <p>{item[2]}</p>
          <p>{item[4]}</p>
          <p>{item[3]}</p>
        </div>
        <CardActions  disableActionSpacing>
          <button className="btn btn-primary" onClick={this.handleLike}>
            {label}
          </button>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    ));
    return (
      <div className="App" style={styles.app}>

        <AppBar position="static" style={styles.appHeader} >
          <Toolbar>
            <Typography variant="title" color="inherit" >
              News Feed
            </Typography>
            <div style={styles.uploadButton}>
              <Button onClick={this.handleClickOpen} style={{color:'white', float: 'right', justifyContent: 'end'}}>Add</Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogContent>
                  <Card style={styles.formCard}>

                    <CardHeader
                      title="Form"
                    />

                  <form onSubmit={this.handleSubmit.bind(this)}>
                      <TextField
                        id="title"
                        label="Title"
                        value={this.state.title}
                        onChange={this.handleChange('title')}
                        margin="normal"
                        style={styles.textField}
                      />

                      <TextField
                        id="photoURL"
                        label="Photo URL"
                        value={this.state.photoURL}
                        onChange={this.handleChange('photoURL')}
                        margin="normal"
                        style={styles.textField}
                      />

                      <TextField
                        id="caption"
                        label="Write a caption"
                        value={this.state.caption}
                        onChange={this.handleChange('caption')}
                        margin="normal"
                        style={styles.textField}
                      />

                      <TextField
                        id="tags"
                        label="Tags"
                        value={this.state.tags}
                        onChange={this.handleChange('tags')}
                        margin="normal"
                        style={styles.textField}
                      />

                      <TextField
                        id="location"
                        label="Add a location"
                        value={this.state.location}
                        onChange={this.handleChange('location')}
                        margin="normal"
                        style={styles.textField}
                      />

                      <TextField
                        id="date"
                        label="Date"
                        value={this.state.date}
                        onChange={this.handleChange('date')}
                        margin="normal"
                        style={styles.textField}
                      />

                    <Button type="submit" value="upload">Upload</Button>

                    </form>

                  </Card>
                </DialogContent>
              </Dialog>
            </div>
          </Toolbar>
        </AppBar>



        <div style={styles.main}>
          <div style={styles.right}>
              <ul style={styles.ulType}>
                { (allEvents) ? allEvents : null}
              </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
