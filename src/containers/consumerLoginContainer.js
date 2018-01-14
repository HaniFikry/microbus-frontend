import Login from '../components/login'
import {connect} from 'react-redux';
import {userLoginLoading, userLogin, userLoginSuccess, userLoginFailure, clearConsumerMessages} from '../actions/consumer'
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'


const mapStateToProps = function(state) {
  return {
    error:  state.consumer.error,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loginConsumer: function(consumer){
      dispatch(userLoginLoading());
      dispatch(userLogin(consumer)).then(function(response){
        if(response.payload.status < 400){
        const token = response.payload.data.auth_token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(userLoginSuccess(response));
        history.push('/consumer/profile');
      }else {
        dispatch(userLoginFailure(response.payload.response.data.error))
      }
    })
  }, clearErrorMessages : function(){
    dispatch(clearConsumerMessages());
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
