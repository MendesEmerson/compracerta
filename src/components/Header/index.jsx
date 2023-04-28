import { useNavigate } from "react-router-dom";
import { Container, Row, SvgImage } from "./styles";
import { ButtonComponent, IconButtonComponent } from "../Button";
import Logo from "../../assets/LogoHorizontal.svg";
import { MdArrowBack } from "react-icons/md";
import { useMediaQuery } from "@material-ui/core";

function HeaderComponent({ isLogin = false, backButton = true }) {
  const isWideScreen = useMediaQuery("(min-width: 650px)");
  const navigate = useNavigate();
  const handleOnClickNavigateLogin = () => {
    navigate("/login");
  };
  const handleOnClickNavigateCadastro = () => {
    navigate("/cadastro");
  };
  const handleOnClickBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      {!isLogin ? (
        <>
          <Row flex={1.2}>
            <SvgImage src={Logo} alt="Logo" />
          </Row>
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
        </>
      ) : (
        <>
          <Row flex={0.2}>
            {backButton ? (
              !isWideScreen ? (
                <IconButtonComponent
                  onClick={handleOnClickBack}
                  icon={<MdArrowBack />}
                />
              ) : (
                <ButtonComponent
                  icon={<MdArrowBack />}
                  title={"Voltar"}
                  onClick={handleOnClickBack}
                />
              )
            ) : null}
          </Row>
          <Row flex={0.6}>
            <SvgImage src={Logo} alt="Logo" />
          </Row>
          <Row flex={0.2}></Row>
        </>
      )}
    </Container>
  );
}

export default HeaderComponent;
