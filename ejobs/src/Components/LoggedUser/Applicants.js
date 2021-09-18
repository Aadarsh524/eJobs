import React, { Component } from 'react'
import "../../Css/Profile.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  getClientProject } from '../../actions/projectAction.js'
import Applicant from './Applicant';



 class Applicants extends Component {

    componentDidMount(){
        this.props.getClientProject();
        
    }
    componentWillReceiveProps(nextProps){
                this.setState({
                     project: nextProps.project,
                });
                
     }
    render() {
           const { clientProject, ProjectID } = this.props.project;
           console.log(ProjectID);
           const { user } = this.props.auth;
    let allApplicant;
       allApplicant =<Applicant ProjectID={ProjectID} project={clientProject}  user={user}/>;
        return (
            <div >
               {allApplicant}
            </div>
        )
    }
}


Applicants.propTypes = {
     getClientProject: PropTypes.func.isRequired,
     auth: PropTypes.object.isRequired,
  
};

const mapStateToProps = (state) => ({
  project: state.project,
  auth: state.auth,
});

export default connect(mapStateToProps, { getClientProject  })(Applicants);
