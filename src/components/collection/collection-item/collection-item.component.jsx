import React from 'react';

import {
  CollectionItemContainer,
  CollectionImageContainer,
  CollectionFooterContainer,
  AddButton,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/cart/cart.actions';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        className="custom-button"
        onClick={() => dispatch(addItem(item))}
        inverted
      >
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
