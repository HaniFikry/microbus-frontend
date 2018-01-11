import {connect} from 'react-redux'
import {fetchAllOffersLoading, fetchAllOffers, fetchAllOffersSuccess, fetchAllOffersFailure} from '../actions/offer'
import OffersList from '../components/offers_list'

const mapStateToProps = function(state) {
    return {
      offers : state.offer.offers
    }
}

const mapDispatchToProps = function(dispatch){
  return {
    fetchAllCurrentOffers : function(){
      dispatch(fetchAllOffersLoading())
      dispatch(fetchAllOffers()).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(fetchAllOffersSuccess(response))
        } else {
          dispatch(fetchAllOffersFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
