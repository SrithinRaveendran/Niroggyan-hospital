import styled from 'styled-components'

export const HomeMainBackground = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 30px 10px;
  }
`

export const HospitalImage = styled.img`
  height: 75%;
  width: 45%;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-top: 20px;
  }
`

export const HomePageP = styled.p`
  font-size: 62px;
  font-weight: bold;
  color: black;
  text-align: center;
  font-family: 'Nunito', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`

export const SpanElement = styled.span`
  color: #4B6CB7;
  font-size: 70px;

  @media screen and (max-width: 768px) {
    font-size: 42px;
  }
`
