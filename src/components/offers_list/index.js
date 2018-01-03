import React, {Component} from 'react';

export default class OffersList extends Component {

  componentWillMount(){
    this.props.fetchAllCurrentOffers();
  }
  render(){
    const {offers} = this.props;
    return (
      <div>
        {
          offers.map((offer) =>
          <div>

          <h1> {offer.name}  </h1>
          <p> {offer.product_name} </p>

          <img src={offer.thumbnail} />
        </div>
        )
        }
      </div>
    )
  }
}
