export function getCustomers(state) {
  return state.customers.customers;
}

export function getActiveCustomer(state) {
  return state.customers.customers.find((item) => item.id === state.popup.data.id);
}
