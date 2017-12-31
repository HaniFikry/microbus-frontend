import React, {Component} from 'react';
import Search from '../../containers/searchContainer'


export default class Profile extends Component {

componentWillMount(){
  this.props.getWishlist()
}
render(){
  const {wishlists, user} = this.props;
  return(
    <div>
      <h2> {user.consumer_name} </h2>
      <h1> WISH LIST </h1>
      <Search />
    {
      wishlists.map((wishlist) =>
      <p> {wishlist.product_name} </p>
    )
    }
    </div>
  )
}
}
