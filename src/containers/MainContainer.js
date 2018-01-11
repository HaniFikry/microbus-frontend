import Main from '../components/main';
import {connect} from 'react-redux';
import {fetchTopOffersLoading, fetchTopOffers, fetchTopOffersSuccess, fetchTopOffersFailure} from '../actions/offer'
// import {fetchTopProduct, fetchTopProductLoading, fetchTopProductSuccess, fetchTopProductFailure, createProductlistItemLoading, createProductlistItem, createProductlistItemSuccess, createProductlistItemFailure} from '../actions/vendor'

const mapStateToProps = function(state) {
    return {
      topOffers : state.offer.topOffers
    }
}

const mapDispatchToProps = function(dispatch){
  return {
    fetchTopCurrentOffers : function(){
      dispatch(fetchTopOffersLoading())
      dispatch(fetchTopOffers()).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(fetchTopOffersSuccess(response))
        } else {
          dispatch(fetchTopOffersFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
