import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap'
import './style.css'



export default class OfferCompleted extends Component {
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
    const {offerDetails, offerBuyers} = this.props;
    if (offerDetails.status === 'completed') {
      return (
        <div className='offerDetails'>
          <p> Congratulations, Your offer {offerDetails.name} on {offerDetails.product_name} was successful </p>
          <img src={offerDetails.thumbnail} alt="offer success"/>

           <ProgressBar active now={offerDetails.progress} label={`${offerDetails.buying_consumers} of ${offerDetails.target_count} users bought this offer`}/>
           <p id="seller-message"> We expect You to start processing the order soon, here is a list of your buyers </p>
           <ul className="buyer-list">
            {
              offerBuyers.map((buyer) =>
                <li> {buyer.name} - {buyer.email}</li>
            )
            }
          </ul>
        </div>
      )
    } else {
      return (
        <div className='offerDetails'>
          <p> Sorry, Your offer {offerDetails.name} on {offerDetails.product_name} was not successful </p>
          <img src={offerDetails.thumbnail} alt="offer success"/>

           <ProgressBar active now={offerDetails.progress} label={`${offerDetails.buying_consumers} of ${offerDetails.target_count} users bought this offer`}/>

        </div>
              )
            }

  }
}
