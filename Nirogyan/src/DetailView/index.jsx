// DetailView/index.js

import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DetailViewMainContainer } from './styledComponents';
import DoctorContext from "../components/Context/DoctorContext";

import DetailViewCard from '../components/DetailViewCard';

const DetailView = () => {
  const { id } = useParams();
  const { doctorDetails } = useContext(DoctorContext);

  const doctor = doctorDetails.find(each => each._id === id);

  return (
    <DetailViewMainContainer>
      <DetailViewCard details={doctor} />
    </DetailViewMainContainer>
  )
}

export default DetailView;
