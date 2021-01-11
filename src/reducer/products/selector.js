export function getFilterStatus(state) {
  return state.products.filterStatus;
}

export function getFilterShop(state) {
  return state.products.filterShop;
}

export function getProducts(state) {
  return state.products.products;
}

export function getActiveProduct(state) {
  return state.products.products.find((item) => item.id === state.popup.data.id);
}
