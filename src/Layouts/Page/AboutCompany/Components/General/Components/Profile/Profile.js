import Avatar from "./Avatar";
import styled from "styled-components";

function Profile() {
  const Caption = styled.div`
    color: #64748b;
  `;
  return (
    <div className="d-inline-flex flex-row">
      <Avatar />
      <div className="ms-3 d-inline-flex flex-column justify-content-center">
        <div className="title mb-2">SPBEAUTY</div>
        <Caption className="mb-1">Салон красоты</Caption>
        <Caption>Санкт-Петербург, Невский пр-т. 28</Caption>
      </div>
    </div>
  );
}

export default Profile;
