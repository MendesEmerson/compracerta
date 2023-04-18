import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;

  margin-top: 35px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }
`;

export const ContainerFooter = styled.div`
  margin-top: auto;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BigText = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 33px;

  color: #ffffff;

  a {
    style: none;
    color: #e60b0b;
  }
`;

export const Wrapper = styled.div`
  max-width: 450px;
  margin: 0 45px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LineSpace = styled.hr`
  width: 70%;
  margin: 35px 0;

  border: 0.5px solid #C5C5C2;
`