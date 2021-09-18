import React, { Component } from 'react'
import "../../Css/Profile.css";
import { FaUserEdit } from "react-icons/fa";
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profileAction.js';
import NavName from './NavName'
import Spinner from '../../Spinner.js'
import ProfileData from './ProfileData'



 class Profile extends Component {

    componentDidMount(){
        this.props.getCurrentProfile();
       
    }
    componentWillReceiveProps(nextProps){
          
                this.setState({
                     profile: nextProps.profile,
                });
                
     }
    render() {
        const { profile, loading } = this.props.profile; 
          let AllProfile;
          if (profile) {
            AllProfile = <div >
                <ProfileData profile={profile}/>
            </div>;
          }
          else if(profile === loading){
            AllProfile = <div >
                <Spinner/>
            </div>;
          }
          
        return (
            <div className="profile">
                   <NavName pageName="Profile" pageDescription="Add or Update profile information."  />
                   <Link to="/editProfile" style={{textDecoration:0}}><button className="editBtn1"><FaUserEdit style={{color: 'black',fontSize:20, marginRight:10}}/> Edit Profile </button>
                                    </Link>
                                     <Link to="/editProfile" style={{textDecoration:0}}><button className="editBtn2"><FaUserEdit style={{color: 'black',fontSize:20, marginRight:10}}/></button>
                                    </Link>
                
                    {AllProfile}
            </div>
        )
    }
}


Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, {  getCurrentProfile })(Profile);
