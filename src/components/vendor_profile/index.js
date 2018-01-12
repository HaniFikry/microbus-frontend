import React, {Component} from 'react';
import Search from '../../containers/searchContainer'
import './style.css'
import {Link} from 'react-router-dom'
import VendorOffers from '../../containers/vendorOffersContainer'
import {Tabs, Tab } from 'react-bootstrap'


export default class VendorProfile extends Component {

componentWillMount(){
  this.props.getProductList();
}
render(){
  const {product_lists, vendor, deleteProduct} = this.props;
  return(
    <div>
           <div className='product_catalogue'>
               <h1> Product catalogue </h1>
               <Search button_name={'add product to product catalogue'} vendor={true}/>
               <ul className='productlist'>
             {
               product_lists.map((product_list) =>
               <li> {product_list.product_name} ({product_list.product_demand}) <Link to={`/products/${product_list.id}`} > Make offer </Link> <i class="fa fa-trash-o" aria-hidden="true" onClick={() => deleteProduct(product_list.id) } ></i></li>
             )
             }
               </ul>
           </div>
    </div>
   )
}
// render(){
//   const {product_lists, vendor, deleteProduct} = this.props;
//   return(
//     <div>
//       <div className='product_catalogue'>
//           <h1> Product catalogue </h1>
//           <Search button_name={'add product to product catalogue'} vendor={true}/>
//           <ul className='productlist'>
//         {
//           product_lists.map((product_list) =>
//           <li> {product_list.product_name} ({product_list.product_demand}) <Link to={`/products/${product_list.id}`} > Make offer </Link> <i class="fa fa-trash-o" aria-hidden="true" onClick={() => deleteProduct(product_list.id) } ></i></li>
//         )
//         }
//           </ul>
//       </div>
//       <VendorOffers />
//     </div>
//    )
// }

}
