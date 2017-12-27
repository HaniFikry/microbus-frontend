import Header from '../components/header'
import {connect} from 'react-redux'
import {userLogout, fetchUser, fetchUserSuccess} from '../actions/consumer'
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'




const mapStateToProps = function(state) {
  return {
  user: state.microbus.user,
  isAuthenticated: state.microbus.isAuthenticated
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    logout: function(){
      dispatch(userLogout());
      localStorage.removeItem('jwtToken');
      setAuthorizationToken(false);
      history.push('/');


    },
    getUser: function(){
      dispatch(fetchUser()).then(function(response){
        if(response.payload.status < 400){
        dispatch(fetchUserSuccess(response));
      }
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
