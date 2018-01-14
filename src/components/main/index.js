import React, {Component} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {Thumbnail, Button, Jumbotron } from 'react-bootstrap';
import LatestOffers from '../../containers/latestOffersContainer'
import { Carousel } from 'antd';


export default class Main extends Component {

	componentWillMount(){
	  this.props.fetchTopCurrentOffers();
	}
	render(){

	  const {topOffers} = this.props;

	  return(
	  	<div className="main">
				<div className="introduction">
					<Jumbotron>
							<h1>Microbus, The power of US!</h1>
							<p>
								Microbus is a group buying platform where you and your friends can enjoy great prices if you buy our
								offers together. What are you waiting for!! Join our Microbus now!
							</p>
							<p>
								<Link to="offers"><Button bsStyle="primary">Explore Great Offers</Button></Link>
							</p>
					</Jumbotron>
				</div>
		  	<div className="topOffers">
			  	<h2>Most Purchased Offers</h2>
  				<Carousel autoplay>
						{
			    		topOffers.map((offer) =>
			    		{
			    		if (offer.status === 'progress'){
				    		return(
									<div>
		    						<Thumbnail  src={offer.thumbnail} height={500}>

			    						<h3>{offer.name}</h3>
			    						<Button bsStyle="primary"><Link to={`/offers/${offer.id}`}>Buy now</Link></Button>
			    						<p>Price: {offer.price}</p>
		    						</Thumbnail>
									</div>
				    			)
			    			}
			    		})
			  	  }
					</Carousel>
		    </div>
		    <LatestOffers />
			</div>
	  )
	}

}
