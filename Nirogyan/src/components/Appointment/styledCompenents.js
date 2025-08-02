import styled from "styled-components";

export const MainBackgroundAppointment = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 10px;
    height: auto;
  }
`

export const FormHeading = styled.h1`
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`
export const Formelement = styled.form`
  width: 50%;
  height: 85%;
  background-color: #4B6CB7;
  border: solid 2px black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`
export const LabelElement = styled.label`
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const InputElement = styled.input`
  width: 90%;
  background-color: white;
  color: black;
  border-radius: 5px;
  height: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 28px;
    font-size: 14px;
  }
`

export const SelectElement = styled.select`
  width: 90%;
  background-color: white;
  color: black;
  border-radius: 5px;
  height: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 28px;
    font-size: 14px;
  }
`

export const Option = styled.option`
  background-color: white;
  color: black;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ButtonElememt = styled.button`
  height: 40px;
  width: 120px;
  background-color: #E9DAC1;
  border-radius: 8px;
  color: black;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 36px;
    font-size: 14px;
  }
`
