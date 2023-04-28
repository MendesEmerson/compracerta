import HeaderComponent from "../../components/Header";
import FooterComponent from "../../components/Footer";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { MockLista } from "../../mocks/MockList";
import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  ContainerFooter,
  ContainerList,
  Row,
  TextName,
} from "./styles";
import CategoriaListComponent from "../../components/List/CategoriaList";
import { ButtonComponent } from "../../components/Button";

function ListPage() {
  const { idList } = useParams();
  const lista = MockLista[idList];
  const [listas, setListas] = useState(lista.lista);

  function updateCheckbox(categoria, itemId, check) {
    const newList = { ...listas };
    const categoriaIndex = newList[categoria];
    const itemIndex = categoriaIndex.findIndex((i) => i.id === itemId);
    if (itemIndex >= 0) {
      const item = categoriaIndex[itemIndex];
      item.check = check;
      categoriaIndex[itemIndex] = item;
      setListas(newList);
    }
  }

  function updateQuantidade(categoria, itemId, quantidade) {
    const newList = { ...listas };
    const categoriaIndex = newList[categoria];
    const itemIndex = categoriaIndex.findIndex((i) => i.id === itemId);
    if (itemIndex >= 0) {
      const item = categoriaIndex[itemIndex];
      item.quantidade = quantidade;
      categoriaIndex[itemIndex] = item;
      setListas(newList);
    }
  }

  function renderForm() {
    return (
      <div>
        <div>
          <label>Nome do item:</label>
          <input type="text" id="nome-item" />
        </div>
        <div>
          <label>Quantidade:</label>
          <input type="number" id="quantidade-item" />
        </div>
        <div>
          <label>Categoria:</label>
          <select id="categoria-item">
            <option value="Frutas e Vegetais">Frutas e vegetais</option>
            <option value="Carnes e Peixes">Carnes e peixes</option>
            <option value="Produtos Lacteos">Produtos lácteos</option>
            <option value="Padaria">Padaria</option>
            <option value="Congelados">Congelados</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Alimentos Enlatados">Alimentos enlatados</option>
            <option value="Produtos de Limpeza">Produtos de limpeza</option>
            <option value="Produtos de Higiene Pessoal">
              Produtos de higiene pessoal
            </option>
          </select>
        </div>
      </div>
    );
  }

  function handleAddItem() {
    confirmAlert({
      title: "Adicionar novo item",
      message: renderForm(),
      buttons: [
        {
          label: "Adicionar",
          onClick: () => {
            const valores = processarForm();
            const { nomeItem, quantidadeItem, categoriaItem } = valores;
            const idItem = Date.now();
            const novaLista = [
              ...listas[categoriaItem],
              {
                id: idItem,
                item: nomeItem,
                quantidade: quantidadeItem,
                categoria: categoriaItem,
                check: false,
              },
            ];
            setListas({
              ...listas,
              [categoriaItem]: novaLista,
            });
            lista.quantidadeItensList += 1;
          },
        },
        {
          label: "Cancelar",
        },
      ],
      closeOnClickOutside: false,
    });
  }

  function processarForm() {
    const nomeItem = document.getElementById("nome-item").value;
    const quantidadeItem = parseInt(
      document.getElementById("quantidade-item").value
    );
    const categoriaItem = document.getElementById("categoria-item").value;
    return { nomeItem, quantidadeItem, categoriaItem };
  }

  return (
    <>
      <HeaderComponent isLogin={true} />
      <Container>
        <Row>
          <TextName>{lista.nomeList}</TextName>
          <ButtonComponent
            variant="secondaryVariant"
            title={`Novo Item`}
            onClick={handleAddItem}
          />
        </Row>
        <ContainerList>
          {Object.keys(listas).map((categoria) => (
            <CategoriaListComponent
              key={categoria}
              categoriaLista={categoria}
              nome={categoria}
              lista={listas}
              setLista={setListas}
              updateQuantidade={(categoriaName, itemId, itemQuantidade) =>
                updateQuantidade(categoriaName, itemId, itemQuantidade)
              }
              updateCheckbox={(categoriaName, itemId, itemCheckbox) =>
                updateCheckbox(categoriaName, itemId, itemCheckbox)
              }
            />
          ))}
        </ContainerList>
      </Container>
      <ContainerFooter>
        <FooterComponent />
      </ContainerFooter>
    </>
  );
}

export default ListPage;
