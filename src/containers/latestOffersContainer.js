import {connect} from 'react-redux';
import {fetchLatestOffersLoading, fetchLatestOffers, fetchLatestOffersSuccess, fetchLatestOffersFailure} from '../actions/offer'
import LatestOffers from '../components/latest_offers';

const mapStateToProps = function(state) {
    return {
      latestOffers : state.offer.LatestOffers
    }
}

const mapDispatchToProps = function(dispatch){
  return {
    fetchLatestCurrentOffers : function(){
      dispatch(fetchLatestOffersLoading())
      dispatch(fetchLatestOffers()).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(fetchLatestOffersSuccess(response))
        } else {
          dispatch(fetchLatestOffersFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestOffers);