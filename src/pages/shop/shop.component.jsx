import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectShopIsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectShopIsFetching);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
