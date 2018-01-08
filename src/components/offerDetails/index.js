import React, {Component} from 'react';
import './style.css'
import {Button, ProgressBar} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class OfferDetails extends Component {
  componentWillMount(){
    this.props.fetchSingleOffer(this.props.match.params.id)
  }
  render(){
    const {offerDetails, user, buyItem} = this.props;
    return (
      <div className='offerDetails'>
        <p> Sold by : {offerDetails.seller} </p>
        <h1>{offerDetails.name}</h1>
        <p><small> {offerDetails.product_name} </small></p>
        <img src={offerDetails.thumbnail} />
        <p> {offerDetails.description} </p>
        <h3> {offerDetails.price} MakMak</h3>
         <ProgressBar active now={offerDetails.progress} label={`${offerDetails.progress}%`}/>
         {
          (offerDetails.price <= user.user_balance) ?
        <Button bsStyle="primary" bsSize="large" onClick={() => buyItem(offerDetails.id)}>
          Buy now
			  </Button>
        :
        <div>
        <Button bsStyle="primary" bsSize="large" disabled >
          Buy now
			  </Button>
        <p>You need {offerDetails.price - user.user_balance} makmak to buy this offer .. The good news is You can buy makmaks from our <Link to='/store'>Store </Link> </p>
       </div>
        }
      </div>
    )
  }
}
