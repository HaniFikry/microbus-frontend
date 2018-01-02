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
        dispatch(registerNewVendorSuccess(response));
        history.push('/');
      }).catch(function(error){
        dispatch(registerNewVendorFailure(error))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewVendor);
