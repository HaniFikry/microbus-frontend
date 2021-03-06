import {connect} from 'react-redux'
import offerDetails from '../components/offerDetails'
import {fetchOfferDetails, fetchOfferDetailsLoading, fetchOfferDetailsSuccess, fetchOfferDetailsFailure} from '../actions/offer'
import {buyOffer, buyOfferSuccess} from '../actions/buy_offer'
import history from '../history'
import {saveCurrentLocation} from '../actions/consumer'


const mapStateToProps = function(state) {
  return {
    offerDetails : state.offer.offerDetails,
    user: state.consumer.user
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
    }, buyItem : function(id) {
      dispatch(buyOffer(id)).then(function(response){
        if (response.payload.status < 400) {
          dispatch(buyOfferSuccess(response))
          history.push(`/offer/${id}/success`)
        }
      })
    }, saveLocation : function(url){
      dispatch(saveCurrentLocation(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(offerDetails)
