import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  @media screen and (max-width: 800px) {
    width: 300px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  @media screen and (max-width: 800px) {
    margin: 10px auto;
  }
`;
