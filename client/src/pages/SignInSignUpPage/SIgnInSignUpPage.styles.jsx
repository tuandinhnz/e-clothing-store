import styled from 'styled-components';

export const SignInSignUpContainer = styled.div`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
