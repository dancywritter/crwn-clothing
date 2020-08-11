import React from 'react';
import { useSelector } from 'react-redux';

import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopCollectionsForPreview } from '../../../redux/shop/shop.selectors';

const CollectionsOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview);
  return collections.map((collection) => (
    <CollectionPreview key={collection.id} {...collection} />
  ));
};

export default CollectionsOverview;
