import React, { Component } from 'react';
import "../../Css/InboxSideBar.css";
import { getAllMessages , getRoomName } from '../../actions/messageAction'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIndividualProfile, clearIndividualProfile } from '../../actions/profileAction'

 class InboxSideBar extends Component {

      onSeeMessageClick(id) {
          this.props.getAllMessages(id);
          this.props.getRoomName(id);
          this.props.clearIndividualProfile();
          this.props.getIndividualProfile(id);


         }
     
   render() {
       const {messageRooms , allUsers } = this.props;

       
     return(
            <div className="inboxSideBar"> 
              
             {messageRooms.map(roomList =>
                    <div>
                    <div    onClick={this.onSeeMessageClick.bind(this, roomList.otherPerson)}   className="messagedUser"  >
                              <p>{allUsers.map((users, i) =>
                              users._id === roomList.otherPerson ? ( <h5 className="roomUser">{users.email}</h5>): null  
                          )}</p>

                    </div>
                        </div>
              )}
            </div>
  )
   }
}

InboxSideBar.propTypes = {
  getAllMessages: PropTypes.func.isRequired,
    getIndividualProfile: PropTypes.func.isRequired,
    clearCurrentProfile: PropTypes.func.isRequired,


};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {clearIndividualProfile,getIndividualProfile,getAllMessages , getRoomName})(InboxSideBar);
