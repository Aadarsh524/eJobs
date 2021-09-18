import React, { Component } from 'react'
import "../../Css/Chat.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messageAction.js';
import { FiSend } from "react-icons/fi";
import { withRouter } from "react-router-dom";
import isEmpty from '../../validation/isEmpty.js';


 class Chat extends Component {
      constructor(){
         super();
            this.state = {
                 text: '',
                 otherPerson: ''
             };
         this.onChange = this.onChange.bind(this);
     }

    onChange(e){
         this.setState({[e.target.name]: e.target.value});
     }
      onSendMessageClick(roomname) {  
                    const newMessage = {
                        text: this.state.text,
                        otherPerson: roomname,
         };
         this.props.sendMessage(newMessage);
        this.setState({text: ''});

             }
    render() {
          const { roomname  } = this.props.message;
        const { messages, user , allUsers } = this.props;

         const { individualProfile, profile } = this.props.profile; 
          let fromPersonAvatar;
          let otherPersonAvatar;

            if (profile) {
            fromPersonAvatar = isEmpty(profile.userPhoto) ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" : (`http://localhost:5000/images/${profile.userPhoto}`)
          }
        if (individualProfile === null) {
            otherPersonAvatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
          }
       if (individualProfile) {
         otherPersonAvatar = isEmpty(individualProfile.userPhoto) ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" : (`http://localhost:5000/images/${individualProfile.userPhoto}`)
          }

        return (
                  <div className="chat"> 
                  
                           <div className="topInfo">
                               <img src={otherPersonAvatar} alt=""/>
                            {allUsers.map((alluser, i) => alluser._id === roomname ? (<h5>{alluser.email}</h5>):(null))}
                           </div>


                            <div className="messageArea">
                                 <div className="allMessage">
                                                        {messages.map((message , i) =>
                                    message.fromPerson ===  user.user.id && message.otherPerson ===  roomname ? (
                                        <div className="userMessage">
                                                <p>{message.text}</p>
                                                    <img src={fromPersonAvatar} alt=""/> 
                                                    </div>): (
                                                        message.otherPerson ===  user.user.id && message.fromPerson ===  roomname ? (
                                                            <div className="clientMessage">
                                                    <img src={otherPersonAvatar} alt=""/>
                                                <p>{message.text}</p>
                                                
                                            </div>
                                                        ): (null)))}
                                </div>
                                
                            </div>


                            <div className="messageForm">
                                <form autoComplete="off" >
                                    <input type='text'  
                                        name= 'text'
                                        value={this.state.name} 
                                        onChange={this.onChange} 
                                        />
                                    <button type="reset" onClick={this.onSendMessageClick.bind(this, roomname)} className="sendMsg" ><FiSend style={{color: 'gray',fontSize:20, marginRight:25}}/></button>
                                </form>
                            </div>
              
            </div>
        )
    }
}

Chat.propTypes = {
      sendMessage: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,

};

const mapStateToProps = (state) => ({
  profile: state.profile,

      message: state.message
    
});

export default connect(mapStateToProps, { sendMessage  })(withRouter(Chat));




