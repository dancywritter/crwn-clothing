import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(updateCollections(collectionsMap));
        setLoading(false);
      }
    );
    return () => {
      unsubscribeFromSnapshot();
    };
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
