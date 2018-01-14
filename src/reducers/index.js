import {combineReducers} from 'redux';
import consumer from './consumer';
import vendor from './vendor';
import offer from './offer'
import notifications from './notifications'
import vendor_notifications from './vendor_notifications'

const rootReducer = combineReducers({
    consumer, vendor, offer, notifications, vendor_notifications
})


export default rootReducer;
