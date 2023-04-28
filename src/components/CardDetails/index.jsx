import { Container, Text, TextTitle, Wrapper } from "./styles";

function CardComponent({ title, descrição, qntItens, onClick }) {
  return (
    <Container onClick={onClick}>
      <TextTitle>{title}</TextTitle>
      <Wrapper>
        <Text>
          Itens na Lista: <span>{qntItens}</span>
        </Text>
        <Text>
          Descrição: <span>{descrição}</span>
        </Text>
      </Wrapper>
    </Container>
  );
}

export default CardComponent;
