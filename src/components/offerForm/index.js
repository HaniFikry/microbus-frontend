import React, {Component} from 'react';
import Axios from 'axios'
import { Spin} from 'antd';
import './style.css'

export default class OfferForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      description: '',
      price: '',
      target_count: '',
      deadline: '',
      vendor_product_id: '',
      thumbnail: ''
    }
  }

  componentWillMount(){
    this.props.fetchSelectedProduct(this.props.match.params.id),
    this.setState({vendor_product_id: this.props.match.params.id})
  }

  handleChange(event) {
    this.setState({...this.state, [event.target.name] : event.target.value})
  }
  changeFile(event) {
  this.setState({thumbnail: event.target.files[0]})
  console.log(this.state)
}

    handleSubmit = (event) => {
      const {createNewOffer} = this.props;
      event.preventDefault();

      var name = this.state.name;
      var description = this.state.description;
      var price = this.state.price;
      var target_count = this.state.target_count;
      var deadline = this.state.deadline;
      var thumbnail = this.state.thumbnail;
      var vendor_product_id = this.state.vendor_product_id;


      var formData = new FormData();
      formData.append("offer[name]", name);
      formData.append("offer[description]", description);
      formData.append("offer[price]", price);
      formData.append("offer[target_count]", target_count);
      formData.append("offer[deadline]", deadline);
      formData.append("offer[thumbnail]", thumbnail);
      formData.append("offer[vendor_product_id]", vendor_product_id);

      // console.log(this.state)
      createNewOffer(formData)
    }

  render(){
    const { singleProduct, createNewOffer, loading } = this.props;
    if(loading){
            return (
                <Spin />
            )
    } else {
    return (

      <div>
        <h2 className="secondary-header"> New offer! </h2>
        <h3 className="offer-for"> OFFER FOR ITEM: {singleProduct.product_name} </h3>
        {this.props.match.params.id}
        <div>
        <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit(event)}}>

            <div>
             <label>
               <p> Name: </p>
               <input type="text"  name='name' onChange={this.handleChange.bind(this)} required={true}/>
             </label>
            </div>
             <div>
             <label>
               <p> Description: </p>
               <textarea type="text"  name='description' onChange={this.handleChange.bind(this)} required={true}/>
             </label>
           </div>
             <div>
             <label>
               <p> price </p>
               <input type="number"  name='price' onChange={this.handleChange.bind(this)} required={true}/>
             </label>
           </div>
             <div>
             <label>
               <p> Target-Consumers: </p>
               <input type="number"  name='target_count' onChange={this.handleChange.bind(this)} required={true}/>
             </label>
           </div>
             <div>
             <label>
               <p> Valid until </p>
               <input type="datetime-local" name='deadline' onChange={this.handleChange.bind(this)}/>
             </label>
           </div>
             <div>
             <label>
               <p> Image </p>
               <input type="file" onChange={this.changeFile.bind(this)} />
             </label>
           </div>
           <input type="submit" value="Make an offer"  />
          </form>
        </div>
      </div>
    )
  }
  }
}
