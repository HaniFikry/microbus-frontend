import {connect} from 'react-redux'
import {addItemToWishlistLoading, addItemToWishlist, addItemToWishlistSuccess, addItemToWishlistFailure, createWishlistItemLoading, createWishlistItem, createWishlistItemSuccess, createWishlistItemFailure} from '../actions/consumer'
import search from '../components/search'

const mapDispatchToProps = function(dispatch) {
  return {
    addWishListItem : function(id) {
      dispatch(addItemToWishlistLoading());
      dispatch(addItemToWishlist(id)).then(function(response){
        if(response.payload.status < 400) {
          dispatch(addItemToWishlistSuccess(response))
        } else {
          dispatch(addItemToWishlistFailure(response.error))
        }
      })
    }, createItem : function(name){
      dispatch(createWishlistItemLoading());
      dispatch(createWishlistItem(name)).then(function(response){
        if (response.payload.status < 400) {
          dispatch(createWishlistItemSuccess(response));
        } else {
          dispatch(createWishlistItemFailure(response.payload.error))
        }
      })
    }

  }
}

export default connect(null, mapDispatchToProps)(search);
