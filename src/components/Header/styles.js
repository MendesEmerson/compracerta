import styled from "styled-components";

export const Container = styled.div`
  height: 55px;
  width: 100%;

  background-color: #acacac;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  
`;

export const SvgImage = styled.img`
  width: 85%;
  height: 45px;
  margin: 5px;
  margin-left: 15px;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 355px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  background-color: #acacac;
  flex: ${({ flex }) => flex};

  @media (min-width: 768px) {
    padding-right: 55px;
  }
`;
