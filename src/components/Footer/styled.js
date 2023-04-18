import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #000000;
`;

export const FooterText = styled.p`
  color: #ffffff;
  background-color: #000000;

  font-size: 18px;
`;

export const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;