import styled from "styled-components";
import SearchIcon from "../../../../Icons/SearchIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const WrapperInput = styled.div`
  position: relative;
  width: 217px;
`;

const Input = styled.input`
  outline: none;
  border-radius: 24px;
  border: solid #e2e8f0 1px;
  background-color: #f8fafc;
  color: #e2e8f0;
  width: 100%;
  &:hover {
    background-color: #f8fafc;
    border-color: #e6ecf2;
    ::placeholder {
      color: #a8b4c6;
    }
  }
  &:focus {
    background: white;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  right: 6px; /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
  top: 50%;
  transform: translateY(-50%);
`;

function SearchField() {
  return (
    <WrapperInput className="d-inline-flex">
      {" "}
      {/* Устанавливает ширину поля и включает относительное положение */}
      <Input className="p-2" placeholder="Найти на странице..." />
      <SearchIconWrapper className="p-2">
        {" "}
        {/* Устанавливает абсолютное положение внутри поля ввода */}
        <IconOnlyButton icon={<SearchIcon />} />
      </SearchIconWrapper>
    </WrapperInput>
  );
}

export default SearchField;
