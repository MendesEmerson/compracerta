  import HeaderComponent from "../../components/Header";
  import {
    BigText,
    Container,
    ContainerImage,
    ContainerFooter,
    SmallText,
    Wrapper,
  } from "./styles";
  import Logo from "../../assets/LogoTeste.svg";
  import FooterComponent from "../../components/Footer";

  const HomePage = () => {
    return (
      <><HeaderComponent />
        <Container>
          <ContainerImage>
            <img src={Logo} alt="Logo" />
          </ContainerImage>

          <Wrapper>
            <BigText>
              Não importa o tamanho da sua lista de compras,{" "}
              <a href="#">CompraCerta</a> garante que você nunca mais se esqueça
              dos itens essenciais - tornando suas idas ao supermercado mais
              rápidas, simples e sem estresse.
            </BigText>
            <SmallText>
              Comece a se organizar <a href="#">Agora</a>!
            </SmallText>
          </Wrapper>
        </Container>
        <ContainerFooter>
        <FooterComponent/>
        </ContainerFooter>
        
        
      </>
    );
  }

  export default HomePage;
