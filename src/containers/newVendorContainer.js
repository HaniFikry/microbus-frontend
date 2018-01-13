import NewVendor from '../components/newvendor'
import {connect} from 'react-redux';
import {registerNewVendrLoading, registerNewVendor, registerNewVendorSuccess, registerNewVendorFailure, clearVendorMessages} from '../actions/vendor'
import history from '../history'

const mapStateToProps = function(state) {
  return {
    error: state.vendor.error,
    message: state.vendor.message
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    registerVendor: function(newVendor){
      dispatch(registerNewVendrLoading());
      dispatch(registerNewVendor(newVendor)).then(function(response){
        if (response.payload.status < 400) {
          dispatch(registerNewVendorSuccess(response));
          setTimeout(() => {
          history.push('/vendor/login');
          }, 5000)
        } else {
        dispatch(registerNewVendorFailure(response.payload.response.data.errors))
      }
      })
    }, clearRegistrationMessages : function(){
      dispatch(clearVendorMessages());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewVendor);
