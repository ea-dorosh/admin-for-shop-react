import React from "react";
import "./index.scss"
import {Link, withRouter} from 'react-router-dom';
import {AppRoutes} from "constants/app_routes";

const TableData = props => {
  const {payment, fulfillment, id} = props;

  return (
      <td className='table__data'>
        {id ?
            <Link
                to={AppRoutes.order(id)}
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

