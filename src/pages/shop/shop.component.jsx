import React, { useState } from 'react';

import { shopData } from './shop.data';
import CollectionPreview from '../../components/collection/collection-preview/collection-preview.component';

const ShopPage = (props) => {
  const [collections] = useState(shopData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

export default ShopPage;
