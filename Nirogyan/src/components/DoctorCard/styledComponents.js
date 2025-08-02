import styled from "styled-components";

export const CardMainBackground = styled.div`
  width: 90%;
  height: 30%;
  border-radius: 10px;
  background-color: #eef6fb;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 15px;
  }
`;

export const DoctorImage = styled.img`
  height: 95%;
  width: 20%;
  border-radius: 15px;
  border: solid 2px black;

  @media screen and (max-width: 768px) {
    width: 60%;
    height: auto;
    margin-bottom: 15px;
  }
`;

export const DoctorDetailsContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 0;
    text-align: center;
  }
`;

export const DoctorName = styled.h1`
  font-weight: bold;
  color: black;
  font-size: 22px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const DoctorDesginationAvalability = styled.p`
  font-weight: bold;
  color: black;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ViewDetailsAndButtonContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const ViewDetailsbutton = styled.button`
  height: 40px;
  width: 120px;
  background-color: #00a8e8;
  margin: 10px;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 36px;
    font-size: 14px;
  }
`;
