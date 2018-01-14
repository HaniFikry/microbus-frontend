import Header from '../components/header'
import {connect} from 'react-redux'
import {userLogout, fetchUser, fetchUserSuccess} from '../actions/consumer'
import {vendorLogout, fetchVendorSuccess} from '../actions/vendor'
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'


const mapStateToProps = function(state) {
  return {
  user: state.consumer.user,
  vendor: state.vendor.user
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
    vendorLogout: function(){
      dispatch(vendorLogout());
      localStorage.removeItem('jwtToken');
      setAuthorizationToken(false);
      history.push('/');
    },
    getUser: function(){
      dispatch(fetchUser()).then(function(response){
        if(response.payload.status < 400){
        if (response.payload.data.user_type === 'vendor'){
        dispatch(fetchVendorSuccess(response));
      } else if (response.payload.data.user_type === 'consumer') {
        dispatch(fetchUserSuccess(response));
      }
      }
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
