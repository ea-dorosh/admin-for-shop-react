export const AppRoutes = {
  DASHBOARD: '/',
  ALL_ORDERS: {
    MAIN: '/all-orders',
  },
  order(id) {
    return `/orders/${id}`;
  },
};
