import {combineReducers} from 'redux';
import microbus from './microbus';
import vendor from './vendor';
import offer from './offer'
import notifications from './notifications'

const rootReducer = combineReducers({
    microbus, vendor, offer, notifications
})


export default rootReducer;
