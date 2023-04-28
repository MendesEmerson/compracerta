import HeaderComponent from "../../components/Header";
import FooterComponent from "../../components/Footer";
import { InputComponent, InputPasswordComponent } from "../../components/Input";
import { MdPerson, MdLock, MdEmail } from "react-icons/md";
import {
  BigText,
  Container,
  ContainerInput,
  ContainerFooter,
  LineSpace,
  Wrapper,
} from "./styles";
import { ButtonComponent } from "../../components/Button";

function CadastroPage() {
  
  return (
    <>
      <HeaderComponent />
      <Container>
        <Wrapper>
          <BigText>
            Bem-vindo(a) ao <a href="/">CompraCerta</a>! Sua nova ferramenta
            para listas de compras inteligentes.
          </BigText>
        </Wrapper>
        <ContainerInput>
          <LineSpace />
          <Wrapper>
            <form>
              <InputComponent
                leftIcon={<MdPerson />}
                placeholder={"Nome"}
                type="text"
              />
              <InputComponent
                leftIcon={<MdEmail />}
                placeholder={"Email"}
                type="email"
              />
              <InputPasswordComponent
                leftIcon={<MdLock />}
                placeholder={"Senha"}
              />
              <InputPasswordComponent
                leftIcon={<MdLock />}
                placeholder={"Confirme a Senha"}
              />

              <ButtonComponent title={"Cadastrar"} variant="secondary" />
            </form>
          </Wrapper>
          <LineSpace />
        </ContainerInput>
      </Container>
      <ContainerFooter>
        <FooterComponent />
      </ContainerFooter>
    </>
  );
}

export default CadastroPage;
