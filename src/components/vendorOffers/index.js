import React, {Component} from 'react';

export default class VendorOffers extends Component {
  componentWillMount(){
    this.props.fetchVendorCurrentOffers()
  }
  render(){
    const {offers} = this.props;
    return (
      <div>
        <h2> My ongoing offers </h2>

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
