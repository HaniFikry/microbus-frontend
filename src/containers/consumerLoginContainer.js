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
<<<<<<< HEAD
        dispatch(userLoginSuccess(response));
        history.push('/profile');
=======
        console.log(response.payload.data)
        dispatch(userLoginSuccess(response));
        history.push('/');
>>>>>>> 625a40e145dd5a2c86256f0f97a0f1fc5a6ab2ec
      }else {
        dispatch(userLoginFailure(response.payload.error))
      }
    })
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
