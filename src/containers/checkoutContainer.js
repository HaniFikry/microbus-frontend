import {connect} from 'react-redux'
import {chargeMakmaksLoading, chargeMakmaks, chargeMakmaksSuccess, chargeMakmaksFailure, clearChargeSuccessMessage} from '../actions/makmaks'
import Checkout from '../Checkout'
import history from '../history'

const mapStateToProps = function(state){
  return {
  url: state.microbus.prevUrl,
  message: state.microbus.message
  }
}



const mapDispatchToProps = function(dispatch){
  return {
    chargeBalance : function(amount, url){
      dispatch(chargeMakmaksLoading())
      dispatch(chargeMakmaks(amount)).then(function(response){
        if (response.payload.status < 400 ) {
          dispatch(chargeMakmaksSuccess(response))
          setTimeout(() => {
          dispatch(clearChargeSuccessMessage())
          history.push(url)  
        }, 5000)
        } else {
          dispatch(chargeMakmaksFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
