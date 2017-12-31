import {connect} from 'react-redux'
import {fetchWishListLoading, fetchWishList, fetchWishListSuccess, fetchWishListFailure} from '../actions/consumer'
import profile from '../components/profile'
const mapStateToProps = function(state) {
  return {
  wishlists: state.microbus.wishlist,
  user: state.microbus.user
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    getWishlist: function(){
      dispatch(fetchWishListLoading());
      dispatch(fetchWishList()).then(function(response){
        if (response.payload.status < 400) {
          dispatch(fetchWishListSuccess(response));
        } else {
          dispatch(fetchWishListFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(profile);
