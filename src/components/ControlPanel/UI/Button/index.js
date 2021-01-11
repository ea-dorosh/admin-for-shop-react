import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({type, marginRight, marginLeft, fill, handler, color, children}) => (
  <button
    type={type}
    style={{marginRight: marginRight, marginLeft: marginLeft}}
    className={classNames('button', {'button--fill': fill, [`button--${color}`]: color})}
    onClick={handler}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  marginRight: PropTypes.string,
  marginLeft: PropTypes.string,
  fill: PropTypes.bool,
  handler: PropTypes.func.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
