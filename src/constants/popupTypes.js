import PopupFulfillment from 'containers/Popups/Fulfillment';
import PopupShippingAddress from 'containers/Popups/ShippingAddress';
import PopupBillingAddress from 'containers/Popups/BillingAddress';
import PopupPickupAddress from 'containers/Popups/PickupAddress';
import PopupTimeOfIssue from 'containers/Popups/TimeOfIssue';
import PopupEditCustomer from 'containers/Popups/EditCustomer';
import PopupAddCustomer from 'containers/Popups/AddCustomer';
import PopupSendNotification from 'containers/Popups/SendNotification';
import PopupEditQuantity from 'containers/Popups/EditQuantity';
import PopupReturnList from 'containers/Popups/ReturnList';

export const popupTypes = {
  PopupFulfillment: PopupFulfillment,
  PopupShippingAddress: PopupShippingAddress,
  PopupBillingAddress: PopupBillingAddress,
  PopupPickupAddress: PopupPickupAddress,
  PopupTimeOfIssue: PopupTimeOfIssue,
  PopupEditCustomer: PopupEditCustomer,
  PopupAddCustomer: PopupAddCustomer,
  PopupSendNotification: PopupSendNotification,
  PopupEditQuantity: PopupEditQuantity,
  PopupReturnList: PopupReturnList,
};
