import React, { Component } from 'react'
import "../../Css/Inbox.css";
import Chat from './Chat'
import InboxSideBar from './InboxSideBar'
import { getUserRooms } from '../../actions/messageAction.js';
import {  SiGooglemessages } from "react-icons/si";
import Spinner from '../../Spinner.js'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class InboxForA extends Component {
     constructor(){
         super();
             this.state = {
                 message: '',
             };
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

     }
     componentWillMount(){  
         this.props.getUserRooms();
    }
    
      onChange(e){
         this.setState({[e.target.name]: e.target.value});
     }
      onSubmit(e){
         e.preventDefault();   
         const newMessage = {
           message: this.state.email,
         };
         this.props.sendMessage(newMessage);
     }
    render() {
        const { loading,messages,messageRooms  } = this.props.message;
        const { allUsers, user } = this.props.auth;
    let allRooms;
    let chatArea;
    if (messageRooms === loading) {
      allRooms = <Spinner />;
    } 
     else if (messageRooms === null) {
      allRooms = <div className="noRoom">No Message Rooms</div>;
    }
    else {
      allRooms = <InboxSideBar allUsers={allUsers} messageRooms={messageRooms}/>;
    }
   
 if (messages === null) {
      chatArea = <div className="chatMessage">
      <SiGooglemessages style={{color: 'black',fontSize:40, marginRight:25}}/>
        <h5>Click on any chat rooms to see message.</h5>
      </div>;
    } 
    else {
      chatArea = <Chat messages={messages} user={user} allUsers={allUsers} /> ;
    }
   
     
        return (
             <div className="inbox">
                <div className="inbox_body">
                    <div className="roomList">
                      <h4>All Rooms</h4>
                      {allRooms}
                    </div>
                    <div className="messageBox">
                     {chatArea}
                    </div>

              </div>
            </div>
        )
    }
}
InboxForA.propTypes = {
      messageRooms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
     message: state.message,
     auth: state.auth,

});

export default connect(mapStateToProps, { getUserRooms  })(InboxForA);
