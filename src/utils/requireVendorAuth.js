import React, {Component} from 'react';
import {connect} from 'react-redux'
import history from '../history'

export default function(ComposedComponent){
class AuthenticateVendor extends Component {
  componentWillMount(){
    if(!this.props.vendor.user_name){
      history.push('/vendor/login')
    }
  }
  render(){
    return(
      <ComposedComponent {...this.props} />
    )
  }
}
function mapStateToProps(state) {
  return {
    vendor: state.vendor.user
  }
}
  return connect(mapStateToProps)(AuthenticateVendor);
}
