import React, { Component } from 'react'
import "../../Css/Dashboard.css";
import { connect } from 'react-redux';
import NavName from './NavName'
import ProjectInD from './ProjectInD';
import Spinner from '../../Spinner.js'
import { showAllProject,getClientProject } from '../../actions/projectAction.js'
import PropTypes from 'prop-types';

 class Dashboard extends Component {
   


     componentWillReceiveProps(nextProps){
            if(nextProps.project){
                this.setState({
                    project: nextProps.project,
                    auth: nextProps.auth

                });
            }
     }
   componentDidMount(){
        this.props.showAllProject();
        this.props.getClientProject();
    }
    render() {

         const { project, loading } = this.props.project;
         const { user } = this.props.auth;
         
    let Allprojects;

    if (project === null || loading) {
      Allprojects = <Spinner />;
    } else {
      Allprojects = <ProjectInD project={project} user={user}/>;
    }
        return (
            <div className="dashboard">
                <NavName  className="PageName" pageName="DashBoard" pageDescription="See all the project listed on eJob. And Apply."  />
                <div className="dashBoard_body">
                    {Allprojects}
                </div>
            </div>
        )
    }
}
Dashboard.propTypes = {
  showAllProject: PropTypes.func.isRequired,
  getClientProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project
});
export default connect(mapStateToProps, { showAllProject, getClientProject})(Dashboard);
