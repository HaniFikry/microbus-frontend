import React, {Component} from 'react';
import './style.css'
import {Button, ProgressBar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Countdown from 'react-countdown-now';



export default class OfferDetails extends Component {
  componentWillMount(){
    this.props.fetchSingleOffer(this.props.match.params.id)
  }
  componentWillReceiveProps(nextProps){
  const {fetchSingleOffer, match: {params}} = nextProps;
    if(params.id !== this.props.match.params.id){
      fetchSingleOffer(params.id)
    }
}
  render(){
    const {offerDetails, user, buyItem, saveLocation} = this.props;
    if (offerDetails.status !== 'progress') {
      return (
        <div className='offerDetails'>
          <p> Sold by : {offerDetails.seller} </p>
          <h1>{offerDetails.name}</h1>
          <h3>{offerDetails.status}</h3>
          <img src={offerDetails.thumbnail} alt ="offer"/>
          <p> {offerDetails.description} </p>
          <h3> {offerDetails.price} MakMak</h3>
           <ProgressBar active now={offerDetails.progress} label={`${offerDetails.buying_consumers} of ${offerDetails.target_count} users bought this offer`}/>
        </div>
      )
    }
    if (user.user_name) {
    return (
      <div className='offerDetails'>
        <p> Sold by : {offerDetails.seller} </p>
        <h1>{offerDetails.name}</h1>
        <p><small> {offerDetails.product_name} </small></p>
        <img src={offerDetails.thumbnail} alt="offer" />
        <p> {offerDetails.description} </p>
        <h3> {offerDetails.price} MakMak</h3>

        <h4><Countdown date={offerDetails.deadline} /></h4>

         <ProgressBar active now={offerDetails.progress} label={`${offerDetails.buying_consumers} of ${offerDetails.target_count} users bought this offer`}/>

         {
          (offerDetails.price <= user.user_balance) ?
        <Button bsStyle="primary" bsSize="large" onClick={() => buyItem(offerDetails.id)} >        Buy now
			  </Button>
        :
        <div>
        <Button bsStyle="primary" bsSize="large" disabled >
          Buy now
			  </Button>
        <p>You need {offerDetails.price - user.user_balance} makmak to buy this offer .. The good news is You can buy makmaks from our <Link onClick={() =>saveLocation(this.props.location.pathname)}to='/store'>Store </Link> </p>
       </div>
        }
      </div>
    )
  } else {
    return (
      <div className='offerDetails'>
        <p> Sold by : {offerDetails.seller} </p>
        <h1>{offerDetails.name}</h1>
        <p><small> {offerDetails.product_name} </small></p>
        <img src={offerDetails.thumbnail} alt="offer" />
        <p> {offerDetails.description} </p>
        <h3> {offerDetails.price} MakMak</h3>
        <h4><Countdown date={offerDetails.deadline} /></h4>
        <ProgressBar active now={offerDetails.progress} label={`${offerDetails.buying_consumers} of ${offerDetails.target_count} users bought this offer`}/>
        <p> Sorry, only consumers can buy this product </p>
      </div>
    )
  }
  }
}
