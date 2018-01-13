import {connect} from 'react-redux'
import OfferCompleted from '../components/offer_completed'
import {fetchOfferDetails, fetchOfferDetailsLoading, fetchOfferDetailsSuccess, fetchOfferDetailsFailure} from '../actions/offer'



const mapStateToProps = function(state) {
  return {
    offerDetails : state.offer.offerDetails,
    offerBuyers : state.offer.offerBuyers
  }
}


const mapDispatchToProps = function(dispatch){
  return {
    fetchSingleOffer : function(id) {
      dispatch(fetchOfferDetailsLoading());
      dispatch(fetchOfferDetails(id)).then(function(response){
        if(response.payload.status < 400) {
          dispatch(fetchOfferDetailsSuccess(response))
        } else {
          dispatch(fetchOfferDetailsFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferCompleted)
