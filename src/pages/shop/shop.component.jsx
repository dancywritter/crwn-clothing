import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
  firestore,
  convertCollectionShanpsotToMap,
} from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionShanpsotToMap(snapshot);
        dispatch(updateCollections(collectionsMap));
      }
    );
    return () => {
      unsubscribeFromSnapshot();
    };
  }, [dispatch]);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
