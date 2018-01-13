import VendorLogin from '../components/vendorlogin'
import {connect} from 'react-redux';
import {vendorLoginLoading, vendorLogin, vendorLoginSuccess, vendorLoginFailure, clearVendorMessages} from '../actions/vendor'
import setAuthorizationToken from '../utils/setAuthorizationToken';
import history from '../history'


const mapStateToProps = function(state) {
  return {
    error:  state.vendor.error,
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loginVendor: function(vendor){
      dispatch(vendorLoginLoading());
      dispatch(vendorLogin(vendor)).then(function(response){
        if(response.payload.status < 400){
        const token = response.payload.data.auth_token;
        console.log(token)
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(vendorLoginSuccess(response));
        history.push('/vendor/profile');
      }else {
        dispatch(vendorLoginFailure(response.payload.response.data.error))
      }
    })
  }, clearErrorMessages : function(){
    dispatch(clearVendorMessages());
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorLogin);
