import React, {Component} from 'react';
import {connect} from 'react-redux'
import history from '../history'

export default function(ComposedComponent){
class Authenticate extends Component {
  componentWillMount(){
      setTimeout(() => {
        if(!this.props.user.user_name && !this.props.vendor.user_name){
          history.push('/consumer/login')
        }
      }, 500)

  }
  render(){
    return(
      <ComposedComponent {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.consumer.user,
    vendor: state.vendor.user
  }
}
  return connect(mapStateToProps)(Authenticate);
}
