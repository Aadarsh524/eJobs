import PropTypes from 'prop-types';
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component:Component, auth, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true
          ? (
              <Component {...props} />
            )
          : (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({ 
  auth: state.auth 
});
export default withRouter(connect(mapStateToProps)(PrivateRoute));
