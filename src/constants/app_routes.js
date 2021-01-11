export const AppRoutes = {
  DASHBOARD: '/',
  ORDERS: {
    ORDERS: '/orders',
    ALL_ORDERS: '/orders/all-orders',
    order(id) {
      return `/orders/${id}`;
    },
  },
  PRODUCTS: {
    PRODUCTS: '/products',
    INVENTORY: '/products/inventory',
    TRANSFERS: '/products/transfers',
    DISCOUNTS: '/products/discounts',
  },
  CUSTOMERS: {
    CUSTOMERS: '/customers',
    ALL_CUSTOMERS: '/customers/all-customers',
  },
};
