import NewVendor from '../components/newvendor'
import {connect} from 'react-redux';
import {registerNewVendrLoading, registerNewVendor, registerNewVendorSuccess, registerNewVendorFailure} from '../actions/vendor'
import history from '../history'

const mapStateToProps = function(state) {
  return {
    message:  state.microbus.message
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    registerVendor: function(newVendor){
      dispatch(registerNewVendrLoading());
      dispatch(registerNewVendor(newVendor)).then(function(response){
        if (response.payload.status < 400) {
          dispatch(registerNewVendorSuccess(response));
          history.push('/');
        } else {
        dispatch(registerNewVendorFailure(response.payload.data))
      }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewVendor);
