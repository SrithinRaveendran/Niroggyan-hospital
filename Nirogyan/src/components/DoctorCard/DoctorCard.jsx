import { Component } from "react";
import { Link } from "react-router-dom";
import {
  CardMainBackground,
  DoctorImage,
  DoctorDetailsContainer,
  DoctorName,
  DoctorDesginationAvalability,
  ViewDetailsAndButtonContainer,
  ViewDetailsbutton
} from './styledComponents';

class DoctorCard extends Component {
  render() {
    const { details } = this.props;
    const { imageUrl, specialization, name, availability, _id } = details;


    return (
      <CardMainBackground>
        <DoctorImage src={imageUrl} />
        <DoctorDetailsContainer>
          <DoctorName>{name}</DoctorName>
          <DoctorDesginationAvalability>Specialization: {specialization}</DoctorDesginationAvalability>
          <DoctorDesginationAvalability>Availability: {availability}</DoctorDesginationAvalability>
        </DoctorDetailsContainer>
        <ViewDetailsAndButtonContainer>
          <Link to={`/Doctor/${_id}`} >
            <ViewDetailsbutton>View Details</ViewDetailsbutton>
          </Link>
          {availability === "Available today" ? (
            <Link to='/Appointment'>
              <ViewDetailsbutton>Book Now</ViewDetailsbutton>
            </Link>
          ) : (
            <ViewDetailsbutton onClick={() => alert("Not Available")}>
              Book Now
            </ViewDetailsbutton>
          )}

        </ViewDetailsAndButtonContainer>
      </CardMainBackground>
    );
  }
}

export default DoctorCard;
