import styled from "styled-components";
import InputTitle from "./InputTitle";

const Input = styled.input`
  outline: none;
  border-radius: 24px;
  border: solid #e2e8f0 1px;
  background-color: #f8fafc;
  color: #0f172a;
  &:hover {
    background-color: #d9e2efb8;
  }
`;

function TitledTextInput({ title, def }) {
  return (
    <div className="d-flex flex-column gap-2">
      <InputTitle text={title} />
      <Input className="px-3 py-2" defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;
