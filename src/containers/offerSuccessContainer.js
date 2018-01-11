import {connect} from 'react-redux'
import offerSuccess from '../components/offerSuccess'
import {fetchOfferDetails, fetchOfferDetailsLoading, fetchOfferDetailsSuccess, fetchOfferDetailsFailure} from '../actions/offer'


const mapStateToProps = function(state) {
  return {
    offerDetails : state.offer.offerDetails,
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
export default connect(mapStateToProps, mapDispatchToProps)(offerSuccess)
