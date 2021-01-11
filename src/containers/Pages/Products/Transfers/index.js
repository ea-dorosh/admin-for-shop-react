import React, {useEffect} from 'react';
import './index.scss';
import {useDispatch} from 'react-redux';
import {Operation} from 'actions/products';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import MainContent from 'components/ControlPanel/Main/MainContent';
import TitleH1 from 'components/Titles/TitleH1';

const Transfers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operation.fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <MainHeader>
        <TitleH1 title='Transfers' />
      </MainHeader>
      <MainContent>
        <div>not ready yet</div>
      </MainContent>
    </Main>
  );
};

export default Transfers;
