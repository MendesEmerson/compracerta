import { Container, Columm } from "./styles";
import ButtonComponent from "../Button";

function HeaderComponent() {
  return (
    <Container>
      <Columm flex={1.5}> 
        
      </Columm>
      <Columm  flex={1}>
      <ButtonComponent title={"Login"}/>
      <ButtonComponent title={"Cadastrar"}/>
      </Columm>

      
    </Container>
  );
}

export default HeaderComponent;
