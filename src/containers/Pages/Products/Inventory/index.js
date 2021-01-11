import React, {useEffect} from 'react';
import './index.scss';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator as ActionProduct} from 'actions/products';
import {ActionCreator as ActionPopup} from 'actions/popups';
import {Operation} from 'actions/products';
import {ProductsInventoryFilterShopTypes, ProductsInventoryFilterStatusTypes} from 'constants/productsFilter';
import {getFilterShop, getFilterStatus, getProducts} from 'reducer/products/selector';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import MainContent from 'components/ControlPanel/Main/MainContent';
import TitleH1 from 'components/Titles/TitleH1';
import Tab from 'components/ControlPanel/Tab';
import TabItem from 'components/ControlPanel/Tab/TabItem';
import TabFilter from 'components/ControlPanel/TabFilter';
import TabFilterItem from 'components/ControlPanel/TabFilter/TabFilterItem';
import Table from 'components/ControlPanel/Table';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TableHead from 'components/ControlPanel/Table/TableHead';
import TableData from 'components/ControlPanel/Table/TableData';
import {Field, Form, Formik} from 'formik';
import InputSearch from 'components/Form/InputSearch';
import editIcon from 'images/edit-marker.svg';
import returnIcon from 'images/return.svg';
import ProductTitleBox from 'containers/Pages/Products/ProductTitleBox';
import ButtonIcon from 'components/ControlPanel/UI/ButtonIcon';
import MarkerIcon from 'components/ControlPanel/UI/MarkerIcon';

const Inventory = () => {
  const dispatch = useDispatch();
  const filterStatus = useSelector((state) => getFilterStatus(state));
  const filterShop = useSelector((state) => getFilterShop(state));
  const products = useSelector((state) => getProducts(state));

  useEffect(() => {
    dispatch(Operation.fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitSearchHandler = (values, {setSubmitting}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  function calculateTotalQuantity(product) {
    return product.shops.reduce((total, shop) => total + shop.quantity, 0);
  }

  return products[0] ? (
    <Main>
      <MainHeader>
        <TitleH1 title='Inventory' />
      </MainHeader>
      <MainContent>
        <div className='inventory-page__wrapper main-content__wrapper'>
          <div className='inventory-page__top-wrapper'>
            <Tab>
              {Object.values(ProductsInventoryFilterStatusTypes).map((filter) => (
                <TabItem
                  filterHandle={ActionProduct.filterProductsInventoryStatus}
                  title={filter}
                  isActive={filterStatus === filter}
                  key={filter}
                />
              ))}
            </Tab>
          </div>
          <div className='inventory-page__filter-wrapper'>
            <Formik initialValues={{search: ''}} onSubmit={submitSearchHandler}>
              <div className='inventory-page__search-input'>
                <Form>
                  <Field name='search' component={InputSearch} labelText='Search' />
                </Form>
              </div>
            </Formik>
            <TabFilter>
              {Object.values(ProductsInventoryFilterShopTypes).map((filter) => (
                <TabFilterItem
                  filterHandle={ActionProduct.filterProductsInventoryShop}
                  title={filter}
                  key={filter}
                  isActive={filterShop === filter}
                />
              ))}
            </TabFilter>
          </div>
          <Table tableType='products-inventory'>
            <thead>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Available</TableHead>
                {products[0].shops.map((shop) => (
                  <TableHead key={shop.id}>{shop.name}</TableHead>
                ))}
                <TableHead />
                <TableHead />
              </TableRow>
            </thead>
            <tbody>
              {products.map((product) => {
                let refundStatus = false;
                return (
                  <TableRow key={product.id}>
                    <TableData>
                      <ProductTitleBox product={product} withOptions />
                    </TableData>
                    <TableData>{product.sku}</TableData>
                    <TableData>{calculateTotalQuantity(product)}</TableData>
                    {product.shops.map((shop) => (
                      <TableData key={shop.id}>
                        <div className='inventory-page__quantity'>
                          <span className='inventory-page__marker'>{shop.quantity}</span>
                          {shop.refund && <MarkerIcon type='refund' />}
                        </div>
                      </TableData>
                    ))}
                    <TableData>
                      {product.shops.map((shop) => (shop.refund ? (refundStatus = true) : refundStatus))}
                      {refundStatus && (
                        <ButtonIcon
                          buttonText='refund'
                          buttonIcon={returnIcon}
                          handler={() => {
                            dispatch(ActionPopup.showPopup({name: 'PopupReturnList', data: {id: product.id}}));
                          }}
                        />
                      )}
                    </TableData>
                    <TableData>
                      <ButtonIcon
                        buttonText='edit qty'
                        buttonIcon={editIcon}
                        handler={() => {
                          dispatch(ActionPopup.showPopup({name: 'PopupEditQuantity', data: {id: product.id}}));
                        }}
                      />
                    </TableData>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </div>
      </MainContent>
    </Main>
  ) : null;
};

export default Inventory;
