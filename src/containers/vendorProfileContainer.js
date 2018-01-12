import {connect} from 'react-redux'
import {fetchProductListLoading, fetchProductList, fetchProductListSuccess, fetchProductListFailure, deleteProductlistItem, deleteProductlistItemLoading, deleteProductlistItemSuccess, deleteProductlistItemFailure} from '../actions/vendor'
import vendor_products from '../components/vendor_products'
const mapStateToProps = function(state) {
  return {
  product_lists: state.vendor.product_list,
  vendor: state.vendor.user
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    getProductList: function(){
      dispatch(fetchProductListLoading());
      dispatch(fetchProductList()).then(function(response){
        if (response.payload.status < 400) {
          dispatch(fetchProductListSuccess(response));
        } else {
          dispatch(fetchProductListFailure(response.payload.error))
        }
      })
    }, deleteProduct: function(id){
      dispatch(deleteProductlistItemLoading())
      dispatch(deleteProductlistItem(id)).then(function(response){
        if (response.payload.status < 400){
          dispatch(deleteProductlistItemSuccess(response));
        } else {
          dispatch(deleteProductlistItemFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(vendor_products);
