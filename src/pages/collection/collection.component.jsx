import React from 'react';

import './collection.styles.scss';
import { useSelector } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection/collection-item/collection-item.component';

const CollectionPage = ({
  match: {
    params: { collectionId },
  },
}) => {
  const collection = useSelector(selectShopCollection(collectionId));
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default CollectionPage;
