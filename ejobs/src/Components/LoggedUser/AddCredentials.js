import React, { Component } from 'react'
import AddExperience from './AddExperience';
import AddEducation from './AddEducation';
import NavName from './NavName'
import "../../Css/AddCredentials.css"


export default class AddCredentials extends Component {
    render() {
        return (
            <div className="addCredentials">
                <NavName pageName="Add Credentials" pageDescription="Add All your Credentials Information"  />
                <div className="addCredentials_body">
                    <AddEducation />
                    <AddExperience />
                </div>
            </div>
        )
    }
}
