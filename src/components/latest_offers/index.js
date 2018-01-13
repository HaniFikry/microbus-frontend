import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {  Image, Grid, Col, Row, Thumbnail, Button } from 'react-bootstrap';

// import TopProducts from '../../containers/TopProductsContainer'


export default class LatestOffers extends Component {

	componentWillMount(){
	  this.props.fetchLatestCurrentOffers();
	}
	render(){

	  const {latestOffers} = this.props;

	  return(
	  	<div>
	  			<h2>Latest Offers</h2>
				  <Grid>
				  	<Row>
							{
				  			latestOffers.map((offer) =>
				{
					if (offer.status === 'progress'){
						return(
							<Col xs={12} md={4}>

    						<Thumbnail  src={offer.thumbnail.url} height={500}>

	    						<h3>{offer.name}</h3>
	    						<Button bsStyle="primary"><Link to={`/offers/${offer.id}`}>Buy now</Link></Button>
	    						<p>Price: {offer.price}</p>
    						</Thumbnail>
    					</Col>
						)
					}
				})
				  	}
					</Row>
				  </Grid>
		</div>
	  )
	}

}
