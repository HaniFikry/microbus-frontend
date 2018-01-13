import {connect} from 'react-redux'
import {fetchBoughtOffersLoading, fetchBoughtOffers, fetchBoughtOffersSuccess, fetchBoughtOffersFailure} from '../actions/buy_offer'
import ConsumerOffers from '../components/consumerOffers'

const mapStateToProps = function(state) {
    return {
      boughtOffers : state.offer.boughtOffers
    }
}

const mapDispatchToProps = function(dispatch){
  return {
    fetchConsumerBoughtOffers : function(){
      dispatch(fetchBoughtOffersLoading())
      dispatch(fetchBoughtOffers()).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(fetchBoughtOffersSuccess(response))
        } else {
          dispatch(fetchBoughtOffersFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumerOffers);
