import React, {Component} from 'react';
import Search from '../../containers/searchContainer'
import './style.css'
import {Link} from 'react-router-dom'


export default class ConsumerProfile extends Component {

componentWillMount(){
  this.props.getWishlist()
}
render(){
  const {wishlists, user, deleteItem} = this.props;
  return(
    <div>
      <Link to="/offers" > Check all offers </Link>
      <h2> {user.user_name} </h2>
      <h1> WISH LIST </h1>
      <Search button_name={'Add item to wishlist'} vendor={false}/>
      <ul className="wishlist">
          {
            wishlists.map((wishlist) =>
            <li> {wishlist.product_name} <i class="fa fa-trash-o" aria-hidden="true" onClick={() => deleteItem(wishlist.id) }></i> </li>

          )
          }
      </ul>
    </div>
  )
}
}
