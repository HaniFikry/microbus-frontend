export const rootApi = `http://localhost:3000`;

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
export const vendorOffersApi = `${rootApi}/current_vendor_offers.json`
export const offerDetailsApi = (id) => `${rootApi}/offers/${id}.json`
export const vendorNotificationsApi  =`${rootApi}/vendor/notifications`;
export const vendorLatestNotificationsApi  =`${rootApi}/vendor/latest_notifications`;
export const markVendorNotificationReadApi = (id) => `${rootApi}/vendor/notifications/${id}`;

export const vendorRegistrationApi = `${rootApi}/vendor_registrations`;
export const vendorLoginApi  =`${rootApi}/vendor/login`;
export const currentVendorApi  =`${rootApi}/current_vendor`;
export const vendorProductsApi  =`${rootApi}/vendor_products.json`;
export const addVendorProductApi  =`${rootApi}/vendor/addproduct.json`;
export const deleteVendorProductApi = `${rootApi}/vendor/deleteproduct`;
export const fetchProductApi = (id) => `${rootApi}/vendor_products/${id}.json`;