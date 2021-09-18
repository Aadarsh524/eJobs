import React, { Component }  from 'react';
import "../../Css/User.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authAction.js';
import { clearCurrentProfile,getCurrentProfile ,getAllProfile} from '../../actions/profileAction.js';
import { getAllUsers } from '../../actions/authAction.js';

import AddCredentials from './AddCredentials';
import { withRouter } from "react-router-dom";
import { RiDashboardLine, RiMessage2Line, RiUserLine ,RiLogoutBoxRLine} from "react-icons/ri";
import {  BsFilePost } from "react-icons/bs";
import {  AiOutlineProject } from "react-icons/ai";
import {  BrowserRouter as Router ,Switch, Route, Link} from "react-router-dom";
import DashBoard from './Dashboard';
import Profile from './Profile';
import Inbox from './Inbox';

import AllProjects from './AllProjects';
import PostProject from './PostProject';
import EditProfile from './EditProfile';
import { showAllProject,getClientProject , getAppliedProject} from '../../actions/projectAction.js'

import isEmpty from '../../validation/isEmpty.js';





class User extends Component {

   logoutUser(e){
         e.preventDefault();
            this.props.clearCurrentProfile();
            this.props.logout();
            this.props.history.push('/');
     }
     
     componentDidMount(){
        this.props.getAllUsers();
        this.props.showAllProject();
        this.props.getCurrentProfile();
        this.props.getClientProject();
        this.props.getAppliedProject();
        this.props.getAllProfile();

    }
      render() {
          const { user } = this.props.auth;
        const { profile } = this.props.profile; 
          let navbarAvatar;
       if (profile) {
            navbarAvatar = <img src={isEmpty(profile.userPhoto) ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" : (`http://localhost:5000/images/${profile.userPhoto}`)} alt="user"  ></img>;
          }

    return (
        <Router>
        <div className="user">     
            <div className="navbar">
                <div className="user">
                     {navbarAvatar}
                    <p>{user.user.email}</p>
                </div>
                <div className="navname">
                    <ul>
                        <Link  to="/dashboard"  style={{textDecoration:0}}><li><span className="navItem"><RiDashboardLine style={{color: 'gray',fontSize:20, marginRight:25}}/>Dashboard</span></li></Link>
                        
                        <Link to="/profile" style={{textDecoration:0}}><li><span className="navItem"><RiUserLine style={{color: 'gray',fontSize:20, marginRight:25}}/>Profile</span></li></Link>

                        <Link to="/inbox" style={{textDecoration:0}}><li><span className="navItem"><RiMessage2Line style={{color: 'gray',fontSize:20, marginRight:25}}/>Inbox</span></li></Link>

                        <Link to="/allProjects" style={{textDecoration:0}}><li><span className="navItem"><AiOutlineProject style={{color: 'gray',fontSize:20, marginRight:25}}/>All Projects</span></li></Link>

                        <Link  to="/postproject" style={{textDecoration:0}}><li><span className="navItem"><BsFilePost style={{color: 'gray',fontSize:20, marginRight:25}}/>Post Project</span></li></Link>

                        <li className="logoutLI" onClick={this.logoutUser.bind(this)}><span className="navItem">
                               <RiLogoutBoxRLine style={{color: 'gray',fontSize:20, marginRight:25}}/>Logout 
                        </span></li>
                    </ul>
                </div>

            </div>

 {/* for small screen html */}

            <div className="SmallNav">
               {navbarAvatar}
                <div className="nav">
                    <ul>
                         <Link to="/dashboard" style={{textDecoration:0}}><li><RiDashboardLine style={{color: 'gray',fontSize:20}}/></li></Link>

                        <Link to="/profile" style={{textDecoration:0}}><li><RiUserLine style={{color: 'gray',fontSize:20}}/></li></Link> 

                        <Link to="/inbox" style={{textDecoration:0}}><li><RiMessage2Line style={{color: 'gray',fontSize:20}}/></li></Link>

                        <Link to="/allprojects/asFreelancer" style={{textDecoration:0}}><li><AiOutlineProject style={{color: 'gray',fontSize:20}}/> </li></Link> 

                        <Link to="/postproject" style={{textDecoration:0}}><li><BsFilePost style={{color: 'gray',fontSize:20}}/> </li></Link>

                        <li className="logoutLI" onClick={this.logoutUser.bind(this)}><RiLogoutBoxRLine style={{color: 'gray',fontSize:20}}/></li>
                    </ul>
                </div>
            </div>
            <div className="navbody">
               
                <Switch>
                       

                        <Route  path="/editProfile" component={EditProfile}/>
                            
                        <Route  path="/profile" component={Profile}/>
                             
                        <Route path="/addCredentials" component={AddCredentials}/>
                     
                        <Route  path="/inbox" component={Inbox}/>  

                        <Route path="/allprojects" component={AllProjects}/>

                        <Route path="/postproject" component={PostProject}/>
                           
                        <Route  path="/dashboard"   component={DashBoard}/>  

                </Switch>
            </div>
            

        </div>
    </Router>)
      }
}



User.propTypes = {
  clearCurrentProfile: PropTypes.func.isRequired,
  showAllProject: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getClientProject: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,

};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,

});

export default connect(mapStateToProps,{  logout, clearCurrentProfile,showAllProject,getCurrentProfile,getClientProject, getAppliedProject , getAllProfile, getAllUsers})(withRouter(User));
