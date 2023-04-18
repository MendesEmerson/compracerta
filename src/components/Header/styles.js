import styled from "styled-components";

export const Container = styled.div`

  height: 55px;
  width: 100%;
  
  background-color: #000000;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const Columm = styled.div`

display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #000000;
  flex: ${({flex}) => flex};
`;
