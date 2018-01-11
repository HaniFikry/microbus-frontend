import React, {Component} from 'react';
import { Grid , Col , Thumbnail , Button , Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './style.css'


export default class OffersList extends Component {

  componentWillMount(){
    this.props.fetchAllCurrentOffers();
  }
  render(){
    const {offers} = this.props;
    return (
      <div className='offerList'>
          <Grid>
          <Row>
        {
          offers.map((offer) => 
          { 
            if (offer.status === 'progress') {
              return (
                <Col xs={6} md={4}>
                  <Thumbnail src={offer.thumbnail} alt="242x200">
                    <h3>{offer.name}</h3>
                    <Button bsStyle="primary"><Link to={`/offers/${offer.id}`} >Buy now</Link></Button>
                      <p> {offer.price} </p>
                  </Thumbnail>
                </Col>
              )
            }
          }

        )
        }
        </Row>
      </Grid>
      </div>
    )
  }
}
