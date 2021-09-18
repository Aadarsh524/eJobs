import React, { Component } from 'react'
import "../../Css/AllProjects.css";
import {  BrowserRouter as Router, Switch , Route, Link} from "react-router-dom";
import AsFreelancer from './AsFreelancer';
import AsClient from './AsClient';
import InboxForA from './InboxForA';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavName from './NavName'
import Applicants from './Applicants';
import FreelancerProfile from './FreelancerProfile';
import { clearCurrentProfile } from '../../actions/profileAction'


 class AllProjects extends Component {

       onClearIndividualProfile() {
                 this.props.clearCurrentProfile();
             }


    render() {

        return (
            <Router>
             <div className="allProjects">
                 <NavName pageName="All Project" pageDescription="See all your project that you posted or applied."  />
                   <div className="switchBtn">
                        <Link to="/allprojects/asFreelancer" style={{textDecoration:0}}><button className="asFreelancer">As Freelancer</button></Link>
                         <Link to="/allprojects/asClient" style={{textDecoration:0}}><button 
                          onClick={this.onClearIndividualProfile.bind(this)} className="asClient">As Client</button></Link>
                    </div>
                <div className="allProjects_body">
                  <Switch>
                                 <Route   path="/allprojects/applicantProfile">
                                    <FreelancerProfile />
                                </Route>  
                                <Route   path="/allprojects/applicants">
                                    <Applicants />
                                </Route>  
                                <Route   path="/allprojects/asClient">
                                    <AsClient />
                                </Route>
                                 <Route  path="/allprojects/asFreelancer">
                                    <AsFreelancer />
                                </Route>
                                  <Route  path="/allprojects/message">
                                    <InboxForA />
                                </Route>
                    </Switch>            
                           
                </div>
            </div>
        </Router>)
    }
}
 AllProjects.propTypes = {
  clearCurrentProfile: PropTypes.func.isRequired,


 
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {  clearCurrentProfile  })(AllProjects);
