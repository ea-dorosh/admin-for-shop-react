import {FETCH_CUSTOMERS} from 'actions/actionTypes';

const url = 'http://localhost:3001/allCustomers';

const ActionCreator = {
  fetchCustomers: (json) => ({
    type: FETCH_CUSTOMERS,
    payload: json,
  }),
};

const Operation = {
  fetchCustomers: () => async (dispatch) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch(ActionCreator.fetchCustomers(json));
    } catch (error) {
      console.log(error.message);
    }
  },
  addCustomer: (customer) => async (dispatch) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer),
      });
      dispatch(Operation.fetchCustomers());
    } catch (error) {
      console.log(error.message);
    }
  },
};

export {ActionCreator, Operation};
