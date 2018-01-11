import React, {Component} from 'react';
import {connect} from 'react-redux'
import history from '../history'

export default function(ComposedComponent){
class Authenticate extends Component {
  componentWillMount(){
    if(!this.props.user.user_name){
      history.push('/consumer/login')
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
    user: state.microbus.user
  }
}
  return connect(mapStateToProps)(Authenticate);
}
