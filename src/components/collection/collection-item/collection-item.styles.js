import styled from 'styled-components';
import { CustomButtonContainer } from '../../form/custom-button/custom-button.styles';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      display: flex;
    }
  }
`;

export const CollectionImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const AddButton = styled(CustomButtonContainer)`
  width: 80%;
  opacity: 0.85;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const NameContainer = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.div`
  width: 10%;
`;
