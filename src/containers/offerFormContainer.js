import offerForm from '../components/offerForm'
import {connect} from 'react-redux';
import {fetchProductLoading, fetchProduct, fetchProductSuccess, fetchProductFailure} from '../actions/vendor'
import {createOfferLoading, createOffer, createOfferSuccess, createOfferFailure} from '../actions/offer'
import history from '../history'

const mapStateToProps = function(state) {
  return {
    singleProduct:  state.vendor.singleProduct,
    loading: state.offer.loading
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
    }, createNewOffer : function(offer) {
      dispatch(createOfferLoading());
      dispatch(createOffer(offer)).then(function(response){
        if(response.payload.status < 400) {
          dispatch(createOfferSuccess(response));
          history.push('/vendor/profile')
        } else {
          dispatch(createOfferFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(offerForm);
