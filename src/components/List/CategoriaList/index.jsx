import { IconButtonComponent } from "../../Button";
import { Container, Column, Linha, Row, TextName, Wrapper } from "./styles";
import ItemListComponent from "../ItensList";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

function CategoriaListComponent({
  nome,
  categoriaLista,
  lista,
  setLista,
  updateQuantidade,
  updateCheckbox,
}) {
  const [exibirCategoria, setExibirCategoria] = useState({
    categoriaLista: false,
  });

  function removeComponent(itemId, categoria) {
    setLista({
      ...lista,
      [categoria]: lista[categoria].filter((item) => item.id !== itemId),
    });
  }

  return (
    <Container>
      <Row>
        <TextName>{nome}</TextName>
        <IconButtonComponent
          onClick={() =>
            setExibirCategoria({
              ...exibirCategoria,
              [categoriaLista]: !exibirCategoria[categoriaLista],
            })
          }
          icon={
            exibirCategoria[categoriaLista] ? (
              <MdExpandLess />
            ) : (
              <MdExpandMore />
            )
          }
        />
      </Row>

      <Column>
        {exibirCategoria[categoriaLista] &&
          lista[categoriaLista].map((item) => (
            <ItemListComponent
              key={item.id}
              itemId={item.id}
              itemName={item.item}
              itemQuantidade={item.quantidade}
              itemCheck={item.check}
              removeComponent={() => removeComponent(item.id, categoriaLista)}
              updateQuantidade={(itemId, itemQuantidade) =>
                updateQuantidade(categoriaLista, itemId, itemQuantidade)
              }
              updateCheckbox={(itemId, itemCheck) =>
                updateCheckbox(categoriaLista, itemId, itemCheck)
              }
            />
          ))}
      </Column>
      <Wrapper>
        <Linha/>
      </Wrapper>
    </Container>
  );
}

export default CategoriaListComponent;
