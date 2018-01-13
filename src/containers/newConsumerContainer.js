import New from '../components/newconsumer'
import {connect} from 'react-redux';
import {registerNewUserLoading, registerNewUser, registerNewUserSuccess, registerNewUserFailure} from '../actions/consumer'
import history from '../history'

const mapStateToProps = function(state) {
  return {
    error:  state.microbus.error
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    registerConsumer: function(newConsumer){
      dispatch(registerNewUserLoading());
      dispatch(registerNewUser(newConsumer)).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(registerNewUserSuccess(response));
          history.push('/');
        } else {
        dispatch(registerNewUserFailure(response.payload.error))
      }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New);
