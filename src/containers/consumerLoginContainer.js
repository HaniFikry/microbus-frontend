import Login from '../components/login'
import {connect} from 'react-redux';
import {userLoginLoading, userLogin, userLoginSuccess, userLoginFailure} from '../actions/consumer'

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
        // const token = response.data.token;
        // localStorage.setItem('jwtToken', token);
        dispatch(userLoginSuccess(response));
      }).catch(function(error){
        dispatch(userLoginFailure(error))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
