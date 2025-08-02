import styled from "styled-components";

export const BookingMainBackground = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 30px 10px;
  }
`;
