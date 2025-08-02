import styled from "styled-components";

export const DetailViewMainContainer = styled.div`
  height: 95%;
  width: 95%;
  background-color: #E9DAC1;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DoctorName = styled.h1`
  font-weight: bold;
  text-align: center;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ImageAndParaContainer = styled.div`
  display: flex;
  width: 100%; 
  height: 60%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const DoctorImage = styled.img`
  height: 40%;
  width: 30%;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: auto;
    margin-bottom: 15px;
  }
`;

export const DescriptionPara = styled.p`
  font-weight: bold;
  color: black;
  text-align: center;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0 10px;
  }
`;

export const DetailViewBookNowButton = styled.button`
  height: 60px;
  width: 120px;
  background-color: #E9DAC1;
  color: white;
  border-radius: 12px;
  font-weight: bold;
  border: solid 2px black;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 50px;
    font-size: 14px;
  }
`;
