import styled from "styled-components";

export const DetailViewMainContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px 10px;
  }
`;
