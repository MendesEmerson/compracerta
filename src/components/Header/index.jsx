import { useNavigate } from "react-router-dom";
import { Container, Row, SvgImage } from "./styles";
import { ButtonComponent } from "../Button";
import Logo from "../../assets/LogoHorizontal.svg";

function HeaderComponent({ isLogin = false }) {
  const navigate = useNavigate();
  const handleOnClickNavigateLogin = () => {
    navigate("/login");
  };
  const handleOnClickNavigateCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <Container>
      <Row flex={1.2}>
        <SvgImage src={Logo} alt="Logo" />
      </Row>
      {!isLogin ? (
        <Row flex={0.8}>
          <ButtonComponent
            onClick={handleOnClickNavigateLogin}
            title={"Login"}
          />
          <ButtonComponent
            onClick={handleOnClickNavigateCadastro}
            title={"Cadastrar"}
          />
        </Row>
      ) : null}
    </Container>
  );
}

export default HeaderComponent;
