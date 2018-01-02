import Login from '../components/login'
import {connect} from 'react-redux';
import {userLoginLoading, userLogin, userLoginSuccess, userLoginFailure} from '../actions/consumer'
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'


const mapStateToProps = function(state) {
  return {
    message:  state.microbus.message,
    user: state.microbus.user
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
        dispatch(userLoginFailure(response.payload.error))
      }
    })
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
