import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton.component';

export const CollectionItemContainer = styled.div`
  width: 19vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 40vw;
    font-size: 0.5rem;
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  transition: all 0.2s ease-out;
  &:active {
    transform: translateY(2px);
    border: none;
  }
  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }
  @media screen and (max-width: 800px) {
    margin: auto auto;
  }

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px 0 10px;

    font-size: 0.7rem;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: all 0.2s ease-out;
  ${CollectionItemContainer}:hover & {
    opacity: 0.8;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
