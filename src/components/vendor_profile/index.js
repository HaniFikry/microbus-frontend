import React, {Component} from 'react';
import Search from '../../containers/searchContainer'
import './style.css'
import {Link} from 'react-router-dom'
import VendorOffers from '../../containers/vendorOffersContainer'


export default class VendorProfile extends Component {

componentWillMount(){
  this.props.getProductList();
}
render(){
  const {product_lists, vendor, deleteProduct} = this.props;
  return(
    <div>
      <h2> {vendor.user_name} </h2>
      <h1> Product catalogue </h1>
      <Search button_name={'add product to product catalogue'} vendor={true}/>
      <ul className='productlist'>
    {
      product_lists.map((product_list) =>
      <li> {product_list.product_name}  <Link to={`/products/${product_list.id}`} > Make offer </Link> <i class="fa fa-trash-o" aria-hidden="true" onClick={() => deleteProduct(product_list.id) } ></i></li>
    )
    }
      </ul>
      <VendorOffers />
    </div>
   )
}

}
