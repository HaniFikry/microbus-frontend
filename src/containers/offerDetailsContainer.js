import {connect} from 'react-redux'
import offerDetails from '../components/offerDetails'
import {fetchOfferDetails, fetchOfferDetailsLoading, fetchOfferDetailsSuccess, fetchOfferDetailsFailure} from '../actions/offer'
import {buyOfferLoading, buyOffer, buyOfferSuccess, buyOfferFailure} from '../actions/buy_offer'
import history from '../history'


const mapStateToProps = function(state) {
  return {
    offerDetails : state.offer.offerDetails,
    user: state.microbus.user
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(offerDetails)
