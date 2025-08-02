import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderMainBackground = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #4B6CB7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }
`;

export const HomeAndBookingContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }
`;

export const HospitalName = styled.h1`
  font-weight: bold;
  margin-left: 10px;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 0;
  }
`;

export const HomeAndBookingP = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
