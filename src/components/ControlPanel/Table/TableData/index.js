import React from "react";
import "./index.scss"
import {Link, withRouter} from 'react-router-dom';
import {AppRoutes} from "../../../../constants/app_routes";

const TableData = props => {
  const {payment, fulfillment, checkout} = props;

  return (
      <td className='table__data'>
        {checkout ?
            <Link
                to={AppRoutes.order(checkout)}
            >
              {props.children}
            </Link>
            :
            <span
                className={`
              ${payment ? `payment` : ''}
              ${fulfillment ? `fulfillment fulfillment--${fulfillment.id}` : ''}
             `}
                >
              {props.children}
            </span>
        }
      </td>
  )};

export default withRouter(TableData);

