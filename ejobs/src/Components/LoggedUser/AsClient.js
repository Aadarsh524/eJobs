import React, { Component } from 'react'
import { connect } from 'react-redux';
import Project from './Project';
import "../../Css/AsClient.css"
import Spinner from '../../Spinner.js'
import { showAllProject,getClientProject } from '../../actions/projectAction.js'
import PropTypes from 'prop-types';

class AsClient extends Component {

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
        const { clientProject,loading } = this.props.project;
         const { user } = this.props.auth;
         
    let Allprojects;
   if (clientProject ===  loading) {
      Allprojects = <Spinner />;
    }
    else if (clientProject.length ===  0 ) {
      Allprojects = <h3>No Project Posted yet.</h3>;
    }
    else {
      Allprojects = <Project project={clientProject} user={user}/>;
    }
        return (
            <div>
                {Allprojects}
            </div>
        )
    }
}


AsClient.propTypes = {
  getClientProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

};

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project
});
export default connect(mapStateToProps, { showAllProject, getClientProject})(AsClient);
