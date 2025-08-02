import { Component } from "react";
import { DetailViewMainContainer, DoctorName, ImageAndParaContainer, DescriptionPara, DoctorImage,DetailViewBookNowButton } from './styledComponents'
import { Link } from "react-router-dom";

class DetailViewCard extends Component {
    render() {
        const { details } = this.props
        const { name, description, imageUrl,availability } = details
        console.log(description)
        return (
            <DetailViewMainContainer>
                <DoctorName>{name}</DoctorName>
                <br/>
                <ImageAndParaContainer >
                    <DoctorImage src={imageUrl} />
                    <DescriptionPara>{description}</DescriptionPara>
                </ImageAndParaContainer>
                {availability=="Available today" ?
                <Link to="/Appointment">
                <DetailViewBookNowButton>Book Now</DetailViewBookNowButton>
                </Link>: <DetailViewBookNowButton onClick={()=>alert("Not Avialable")}>Book Now</DetailViewBookNowButton>}
            </DetailViewMainContainer>
        )
    }
}

export default DetailViewCard