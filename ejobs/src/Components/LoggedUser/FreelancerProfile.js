import React, { Component } from 'react'
import "../../Css/Profile.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIndividualProfile } from '../../actions/profileAction.js';
import ProfileData from './ProfileData';



 class FreelancerProfile extends Component {

    render() {
        const { individualProfile } = this.props.profile; 
          let AllProfile;
          if (individualProfile) {
            AllProfile = <div >
                <ProfileData profile={individualProfile}/>
            </div>;
          }
           else if(individualProfile === null){
            AllProfile =  <div>User have not created profile</div>
          }
          
        return (
             <div>
                {AllProfile}
            </div>
        )
    }
}


FreelancerProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, {  getIndividualProfile })(FreelancerProfile);
