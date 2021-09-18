import { connect } from 'react-redux';
import "../../Css/Table.css";
import Moment from 'react-moment';
import React, { Component } from 'react';

 class Education extends Component {
 
     
   render() {
       const { education } = this.props;
     return(
                       <div className="table">
              <table className="data">
               <thead>
                        <tr>
                            <th className="company">Institute</th>
                            <th>Degree</th>
                            <th>Location</th>
                            <th>From</th>
                            <th>To</th>
                        </tr> 
                </thead>
                <tbody>      
                        {education.map(edu =>(  
                            <tr key={edu._id}>
                                <td>{edu.institute}</td>
                                <td>{edu.degree}</td>
                                <td>{edu.location}</td>
                                <td><Moment format="YYYY/MM/DD">{edu.from}</Moment></td>
                                 <td>{edu.to === null ? ('Now'):( <Moment format="YYYY/MM/DD">{edu.to}</Moment>)}</td>
                            </tr>
                            ))}
                </tbody>  
                </table>
                    
                    
            </div>
    )
   }
}

Education.propTypes = {
 
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, null)(Education);
