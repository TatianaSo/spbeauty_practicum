import styled from "styled-components";
import EditIcon from "../../../../../Icons/EditIcon";
import RemoveIcon from "../../../../../Icons/RemoveIcon";
import IconOnlyButton from "../../../../../Components/IconOnlyButton.js";

const Option = styled.div``;

const ButtonLeft = styled.div`
  &:hover {
    opacity: 80%;
  }
`;

const ButtonRight = styled.div`
  &:hover {
    opacity: 80%;
  }
`;

function ListElement(props) {
  return (
    <div className="d-flex flex-row align-items-center align-self-stretch gap-2">
      <Option className="flex-grow-1 p-2">{props.children}</Option>
      <ButtonLeft>
        <IconOnlyButton icon={<EditIcon />} />
      </ButtonLeft>
      <ButtonRight>
        <IconOnlyButton icon={<RemoveIcon />} />
      </ButtonRight>
    </div>
  );
}

export default ListElement;
