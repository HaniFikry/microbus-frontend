import New from '../components/newconsumer'
import {connect} from 'react-redux';
import {registerNewUserLoading, registerNewUser, registerNewUserSuccess, registerNewUserFailure} from '../actions/consumer'

const mapStateToProps = function(state) {
  return {
    message:  state.microbus.message
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    registerConsumer: function(newConsumer){
      dispatch(registerNewUserLoading());
      dispatch(registerNewUser(newConsumer)).then(function(response){
        dispatch(registerNewUserSuccess(response));
      }).catch(function(error){
        dispatch(registerNewUserFailure(error))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New);
