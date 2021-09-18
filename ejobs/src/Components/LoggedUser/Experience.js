import { connect } from 'react-redux';
import "../../Css/Table.css";
import Moment from 'react-moment';
import React, { Component } from 'react';

 class Experience extends Component {
 
     
   render() {
       const { workexperience } = this.props;
     return(
        <div className="table">
                <table className="data">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Job</th>
                                <th>Location</th>
                                <th>From</th>
                                <th>To</th>
                            </tr> 
                        </thead>
                        <tbody>  
                            {workexperience.map(exp =>(  
                                <tr key={exp._id}>
                                    <td>{exp.company}</td>
                                    <td>{exp.job}</td>
                                    <td>{exp.location}</td>
                                    <td> <Moment format="YYYY/MM/DD">{exp.from}</Moment></td>
                                    <td>{exp.to === null ? ('Now'):( <Moment format="YYYY/MM/DD">{exp.to}</Moment>)}</td>
                                </tr>
                                ))}
                      </tbody>  
                </table>
                    
                    
        </div>
    )
   }
}

Experience.propTypes = {
 
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, null)(Experience);
