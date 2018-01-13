import React, {Component} from 'react';
import './style.css'
import {ProgressBar, Grid, Row, Col, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'
import {Alert} from 'antd'



export default class VendorOffers extends Component {
  constructor(){
    super()
    this.state = {
      status: ''
    }
  }
  componentWillMount(){
    if (this.state.status) {
      this.props.fetchVendorCurrentOffers(this.state.status)
    } else {
      this.props.fetchVendorCurrentOffers();
    }
  }
  componentWillUpdate(nextProps, nextState) {
  if (nextState.status !== this.state.status) {
    this.props.fetchVendorCurrentOffers(nextState.status);
    }
  }

  onClose(){
    this.props.clearMessage()
  }
  render(){
    const {offers, message} = this.props;
    return (
      <div className="vendor_offer">
        <div className="filter">
        <ButtonToolbar>
  			  <ButtonGroup bsSize="large">
      				<Button onClick={()=>this.setState({status: ''})}>All</Button>
      				<Button onClick={()=>this.setState({status: 'completed'})}>Completed</Button>
      				<Button onClick={()=>this.setState({status: 'expired'})}>Expired</Button>
      				<Button onClick={()=>this.setState({status: 'progress'})}>Ongoing</Button>
  			    </ButtonGroup>
  		    </ButtonToolbar>
        </div>
        <Grid>
          <Row>
            <div >
              {
              message ?
                <Alert message={message} type="success" showIcon   closable onClose={this.onClose.bind(this)}/>
              : ''
              }
              {
                offers.map((offer) =>
                  <Col md={12}>
                    <div className='clearfix offer_card'>
                      <img src={offer.thumbnail} />
                      <h1> {offer.name}  </h1>
                      <h2>Status: {offer.status} </h2>
                      <div className="progress"><ProgressBar active now={offer.progress} /></div>
                      <p> {offer.description} </p>
                    </div>
                  </Col>
              )
              }
            </div>

          </Row>
        </Grid>
    </div>
    )
  }
}
