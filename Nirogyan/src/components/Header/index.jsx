import { Component } from "react";
import { HeaderMainBackground,HomeAndBookingContainer,HospitalName,HomeAndBookingP} from './styledComponents'

class Header extends Component {
    render() {
        return (
            <HeaderMainBackground>
                <HospitalName>Niroggyan</HospitalName>
                <HomeAndBookingContainer>
                    <HomeAndBookingP to="/">Home</HomeAndBookingP>
                    <HomeAndBookingP to="/Booking">Booking</HomeAndBookingP>
                </HomeAndBookingContainer>
            </HeaderMainBackground>
        )
    }
}

export default Header