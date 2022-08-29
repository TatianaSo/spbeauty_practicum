import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";
function Addresses() {
  const Container = styled.div`
    height: calc(
      100% + 24px
    ); /* не знаю как иначе сделать выравнивание, "general" и "addresses" чтобы сохранить одинаковыми у обоих блоков и верхний уровень блоков и высоту кнопок "сохранить" и "добавить файл" */
    border: 1px solid rgba(100, 116, 139, 0.12);
    border-radius: 8px;
  `;
  return (
    <Container className="d-flex flex-column gap-4 p-4">
      <div className="title">Адреса заведений</div>
      <div className="d-flex justify-content-between flex-column gap-2">
        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
      </div>
      <div className="mt-auto">
        <SecondaryButton>Добавить филиал</SecondaryButton>
      </div>
    </Container>
  );
}

export default Addresses;
