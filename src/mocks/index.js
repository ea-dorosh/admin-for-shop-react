export const shops = [
  {
    name: 'AVS1',
    type: 'Shop',
    city: 'Austin',
    tel: '720-815-5550',
    inventory: 872,
    dailySales: [
      {
        date: '18.11.2020',
        amount: 135.21,
      },
      {
        date: '17.11.2020',
        amount: 100.00,
      },
    ],
  },
  {
    name: 'AVS2',
    type: 'Shop',
    city: 'Austin',
    tel: '720-815-5550',
    inventory: 261,
    dailySales: [
      {
        date: '18.11.2020',
        amount: 230.21,
      },
      {
        date: '17.11.2020',
        amount: 100.00,
      },
    ],
  },
  {
    name: 'AVS3',
    type: 'Shop',
    city: 'Austin',
    tel: '720-815-5550',
    inventory: 231,
    dailySales: [
      {
        date: '18.11.2020',
        amount: 530.55,
      },
      {
        date: '17.11.2020',
        amount: 100.00,
      },
    ],
  },
  {
    name: 'WH1',
    type: 'Warehouses',
    city: 'Austin',
    tel: '720-815-5550',
    inventory: 2840,
    dailySales: [
      {
        date: '18.11.2020',
        amount: 1115.80,
      },
      {
        date: '17.11.2020',
        amount: 100.00,
      },
    ],
  },
];

export const orders = [
  {
    type: 'online',
    checkout: '#online_7392',
    date: 'Feb24 at 02:30am',
    customer: 'User Name',
    payment: 'Paid',
    fulfillment: 'Fulfilled',
    total: '728.03'
  },
  {
    type: 'online',
    checkout: '#online_0000',
    date: 'Feb24 at 02:30am',
    customer: 'User Name',
    payment: 'Paid',
    fulfillment: 'Fulfilled',
    total: '728.03'
  },
  {
    type: 'online',
    checkout: '#online_1111',
    date: 'Feb24 at 02:30am',
    customer: 'User Name',
    payment: 'Refunded',
    fulfillment: 'Fulfilled',
    total: '728.03'
  },
  {
    type: 'offline',
    checkout: '#avs_1111',
    date: 'Feb24 at 02:30am',
    customer: 'User Name',
    payment: 'Paid',
    fulfillment: 'Fulfilled',
    total: '728.03'
  },
];
