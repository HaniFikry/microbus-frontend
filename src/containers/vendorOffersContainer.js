import {connect} from 'react-redux'
import {fetchVendorOffersLoading, fetchVendorOffers, fetchVendorOffersSuccess, fetchVendorOffersFailure} from '../actions/offer'
import VendorOffers from '../components/vendorOffers'

const mapStateToProps = function(state) {
    return {
      offers : state.offer.offers
    }
}

const mapDispatchToProps = function(dispatch){
  return {
    fetchVendorCurrentOffers : function(){
      dispatch(fetchVendorOffersLoading())
      dispatch(fetchVendorOffers()).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(fetchVendorOffersSuccess(response))
        } else {
          dispatch(fetchVendorOffersFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorOffers);
