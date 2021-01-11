import React from 'react';
import Header from 'components/ControlPanel/Header';
import Account from 'components/ControlPanel/Header/Account';
import Logo from 'components/ControlPanel/Header/Logo';

const HeaderContainer = () => (
  <Header>
    <Logo />
    <Account />
  </Header>
);

export default HeaderContainer;
