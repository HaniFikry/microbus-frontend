export const rootApi = process.env.NODE_ENV === 'production'
  ? `https://microbus-api.herokuapp.com`
  :`http://localhost:3000`

export const webSocketApi = process.env.NODE_ENV === 'production'
  ? `wss://microbus-api.herokuapp.com/cable?token=${localStorage.jwtToken}`
   : `ws://localhost:3000/cable?token=${localStorage.jwtToken}`

// Users
export const consumerRegistrationApi = `${rootApi}/consumer_registrations`;
export const userLoginApi  =`${rootApi}/consumer/login`;
export const currentUserApi  =`${rootApi}/current_user`;
export const wishlistApi  =`${rootApi}/wishlists.json`;
export const addProductApi  =`${rootApi}/consumer/addproduct.json`;
export const deleteProductApi = `${rootApi}/consumer/deleteproduct`;
export const buyOfferApi  =`${rootApi}/offer/buy`;
export const chargeMakmaksApi  =`${rootApi}/charge_makmaks`;
export const latestNotificationsApi  =`${rootApi}/consumer/latest_notifications`;
export const consumerNotificationsApi  =`${rootApi}/consumer/notifications`;
export const markNotificationReadApi = (id) => `${rootApi}/consumer/notifications/${id}`;
export const offersApi = `${rootApi}/offers.json`
export const topOffersApi = `${rootApi}/top_offers.json`
export const latestOffersApi = `${rootApi}/latest_offers.json`

export const vendorOffersApi = (status) => `${rootApi}/current_vendor_offers.json${status ? '?status='+status : ''}`
export const offerDetailsApi = (id) => `${rootApi}/offers/${id}.json`
export const vendorNotificationsApi  =`${rootApi}/vendor/notifications`;
export const vendorLatestNotificationsApi  =`${rootApi}/vendor/latest_notifications`;
export const markVendorNotificationReadApi = (id) => `${rootApi}/vendor/notifications/${id}`;
export const boughtOffersApi = `${rootApi}/bought_offers.json`
export const vendorRegistrationApi = `${rootApi}/vendor_registrations`;
export const vendorLoginApi  =`${rootApi}/vendor/login`;
export const currentVendorApi  =`${rootApi}/current_vendor`;
export const vendorProductsApi  =`${rootApi}/vendor_products.json`;
export const addVendorProductApi  =`${rootApi}/vendor/addproduct.json`;
export const deleteVendorProductApi = `${rootApi}/vendor/deleteproduct`;
export const fetchProductApi = (id) => `${rootApi}/vendor_products/${id}.json`;
export const searchApi = (value) => `${rootApi}/search?query=${value}`;
