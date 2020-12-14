export function getOrder(state) {
  return state.orders.orderInfo;
}

export function getBillingAddress(state) {
  return state.orders.orderInfo.deliveryInfo.shipping.billingAddress;
}

export function getShippingAddress(state) {
  return state.orders.orderInfo.deliveryInfo.shipping.shippingAddress;
}

export function getPickUpData(state) {
  return state.orders.orderInfo.deliveryInfo.pickUp;
}

export function getCustomer(state) {
  return state.orders.orderInfo.customer;
}
