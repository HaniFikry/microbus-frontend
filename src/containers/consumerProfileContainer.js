import {connect} from 'react-redux'
import {fetchWishListLoading, fetchWishList, fetchWishListSuccess, fetchWishListFailure, deleteWishlistItemLoading, deleteWishlistItem, deleteWishlistItemSuccess, deleteWishlistItemFailure} from '../actions/consumer'
import consumer_profile from '../components/consumer_profile'
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
    }, deleteItem : function(id){
      dispatch(deleteWishlistItemLoading())
      dispatch(deleteWishlistItem(id)).then(function(response){
        if (response.payload.status < 400){
          dispatch(deleteWishlistItemSuccess(response));
        } else {
          dispatch(deleteWishlistItemFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(consumer_profile);
