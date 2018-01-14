import New from '../components/newconsumer'
import {connect} from 'react-redux';
import {registerNewUserLoading, registerNewUser, registerNewUserSuccess, registerNewUserFailure, clearConsumerMessages} from '../actions/consumer'
import history from '../history'

const mapStateToProps = function(state) {
  return {
    error:  state.consumer.error,
    message: state.consumer.message
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    registerConsumer: function(newConsumer){
      dispatch(registerNewUserLoading());
      dispatch(registerNewUser(newConsumer)).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(registerNewUserSuccess(response));
          setTimeout(() => {
          history.push('/consumer/login');
          }, 5000)
        } else {
        dispatch(registerNewUserFailure(response.payload.response.data.errors))
      }
      })
    }, clearRegistrationMessages : function(){
      dispatch(clearConsumerMessages());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New);
