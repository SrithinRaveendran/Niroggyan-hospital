import { Component } from "react";
import { BookingMainBackground } from './styledComponents'

import DoctorContext from "../Context/DoctorContext";
import DoctorCard from "../DoctorCard/DoctorCard";

class Booking extends Component {
    //state = { doctors: [] }

    // componentDidMount() {
    //     this.Apicall()
    // }

    // Apicall = async () => {
    //     const url = "http://localhost:5000/api/doctors"
    //     const response = await fetch(url)
    //     //console.log(response.ok)
    //     const data = await response.json()
    //     //console.log(data)
    //     this.setState({ doctors: data })
    // }

    render() {
        //const { doctors } = this.state
        //console.log(doctors, "doctors")
        return (
            <DoctorContext.Consumer>
                {({doctorDetails})=>(
            <BookingMainBackground>
               {doctorDetails.map(each=>
                <DoctorCard details={each} />
               )}

            </BookingMainBackground>
                )}
            </DoctorContext.Consumer>
        )
    }
}

export default Booking