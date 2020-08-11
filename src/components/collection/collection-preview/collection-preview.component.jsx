import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { useHistory } from 'react-router-dom';

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() =>
          history.push(`${history.location.pathname}/${routeName}`)
        }
        style={{ cursor: 'pointer' }}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((_item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
