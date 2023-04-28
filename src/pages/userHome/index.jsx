import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../components/Header";
import FooterComponent from "../../components/Footer";
import { InputComponent } from "../../components/Input";
import CardComponent from "../../components/CardDetails";
import { ButtonComponent } from "../../components/Button";
import {
  Container,
  ContainerFooter,
  ContainerInput,
  ContainerText,
  GridList,
  LineSpace,
  Row,
  TextHome,
} from "./styles";
import { MdSearch } from "react-icons/md";
import { MockLista } from "../../mocks/MockList";

function UserHome() {
  const navigate = useNavigate();
  const handleOnClickNavigateList = (id) => {
    navigate(`/listpage/${id}`);
  };
console.log(MockLista)
  return (
    <>
      <HeaderComponent isLogin={true} />
      <Container>
        <ContainerText>
          <TextHome>Bem vindo(a) Fulano de tal...</TextHome>
          <ButtonComponent />
        </ContainerText>
        <Row>
          <LineSpace />
        </Row>

        <ContainerInput>
          <InputComponent leftIcon={<MdSearch />} />
        </ContainerInput>

        <GridList>
          {Object.values(MockLista).map((lista) => (
            <CardComponent
              key={lista.id}
              descrição={lista.descricao}
              qntItens={lista.quantidadeItensList}
              title={lista.nomeList}
              onClick={() => handleOnClickNavigateList(lista.id)}
            />
          ))}
        </GridList>
      </Container>
      <ContainerFooter>
        <FooterComponent />
      </ContainerFooter>
    </>
  );
}

export default UserHome;
