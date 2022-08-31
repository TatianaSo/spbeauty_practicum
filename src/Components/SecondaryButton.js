import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "217px" : props.minWidth;
  const Button = styled.div`
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid #64748b;
    min-width: ${minWidth};
    color: #64748b;
    &:hover {
      border-color: #ffffff;
      color: #8390a2;
    }
    &:active {
      background: #ffffff;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default SecondaryButton;
