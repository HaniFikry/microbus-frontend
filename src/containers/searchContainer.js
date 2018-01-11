import {connect} from 'react-redux'
import {addItemToWishlistLoading, addItemToWishlist, addItemToWishlistSuccess, addItemToWishlistFailure, createWishlistItemLoading, createWishlistItem, createWishlistItemSuccess, createWishlistItemFailure} from '../actions/consumer'
import {addItemToProductlist, addItemToProductlistLoading, addItemToProductlistSuccess, addItemToProductlistFailure, createProductlistItemLoading, createProductlistItem, createProductlistItemSuccess, createProductlistItemFailure} from '../actions/vendor'
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
    }, addProduct : function(id) {
      dispatch(addItemToProductlist());
      dispatch(addItemToProductlist(id)).then(function(response){
        if(response.payload.status < 400) {
          dispatch(addItemToProductlistSuccess(response))
        } else {
          dispatch(addItemToProductlistFailure(response.error))
        }
      })
  }, createProduct : function(name){
    dispatch(createProductlistItemLoading());
    dispatch(createProductlistItem(name)).then(function(response){
      if (response.payload.status < 400) {
        dispatch(createProductlistItemSuccess(response));
      } else {
        dispatch(createProductlistItemFailure(response.payload.error))
      }
    })
  }
}
}

export default connect(null, mapDispatchToProps)(search);
