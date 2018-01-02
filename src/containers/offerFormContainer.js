import offerForm from '../components/offerForm'
import {connect} from 'react-redux';
import {fetchProductLoading, fetchProduct, fetchProductSuccess, fetchProductFailure} from '../actions/vendor'

const mapStateToProps = function(state) {
  return {
    singleProduct:  state.vendor.singleProduct
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchSelectedProduct :function(id) {
      dispatch(fetchProductLoading())
      dispatch(fetchProduct(id)).then(function(response){
        if(response.payload.status < 400) {
          dispatch(fetchProductSuccess(response));
        } else {
          dispatch(fetchProductFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(offerForm);
