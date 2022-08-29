import styled from "styled-components";

const ColoredTitle = styled.div`
  color: #94a3b8;
`;

function InputTitle({ text }) {
  return <ColoredTitle className="caption">{text}</ColoredTitle>;
}

export default InputTitle;
