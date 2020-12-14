export const AppRoutes = {
  DASHBOARD: '/',
  ORDERS: {
    ORDERS: '/orders',
    ALL_ORDERS: '/orders/all-orders',
  },
  CUSTOMERS: {
    ALL_CUSTOMERS: '/all-customers',
  },
  order(id) {
    return `/orders/all-orders/${id}`;
  },
};
