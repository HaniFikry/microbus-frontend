import {combineReducers} from 'redux';
import microbus from './microbus';
import vendor from './vendor';
import offer from './offer'
import notifications from './notifications'
import vendor_notifications from './vendor_notifications'

const rootReducer = combineReducers({
    microbus, vendor, offer, notifications, vendor_notifications
})


export default rootReducer;
