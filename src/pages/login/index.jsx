import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerFooter,
  ContainerInput,
  ContainerImage,
  LineSpace,
  Wrapper,
} from "./styles";
import HeaderComponent from "../../components/Header";
import FooterComponent from "../../components/Footer";
import {ButtonComponent} from "../../components/Button";
import {InputComponent, InputPasswordComponent } from "../../components/Input";
import Logo from "../../assets/LogoVertical.svg";
import {MdLock, MdPerson} from "react-icons/md"

function LoginPage() {
  const navigate = useNavigate();
  const handleOnClickNavigateUserHome = () => {
    navigate("/userhome");
  };

  return (
    <>
      <HeaderComponent />
      <Container>
        <ContainerImage>
          <img src={Logo} alt="logo" />
        </ContainerImage>
        <ContainerInput>
            <LineSpace/>
          <Wrapper>
            <form>
                <InputComponent leftIcon={<MdPerson/>} placeholder={"Email"}/>
                <InputPasswordComponent leftIcon={<MdLock/>} placeholder={"Senha"}/>
                <ButtonComponent onClick={handleOnClickNavigateUserHome} title={"Entrar"} variant="secondary"/>
            </form>
          </Wrapper>
          <LineSpace/>
        </ContainerInput>
      </Container>
      <ContainerFooter>
        <FooterComponent />
      </ContainerFooter>
    </>
  );
}

export default LoginPage;
