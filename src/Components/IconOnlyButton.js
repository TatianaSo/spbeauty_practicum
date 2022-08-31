import Clickable from "./Clickable";
import styled from "styled-components";

function IconOnlyButton({ icon }) {
  const Container = styled.div`
    &:hover {
      color: #bac4d1;
    }
  `;
  return (
    <Container>
      <Clickable>{icon}</Clickable>
    </Container>
  );
}

export default IconOnlyButton;
