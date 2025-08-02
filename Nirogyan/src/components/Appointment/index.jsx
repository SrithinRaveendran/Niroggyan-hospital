import { Component } from "react";

import {
    MainBackgroundAppointment,
    Formelement,
    LabelElement,
    InputElement,
    FormHeading,
    Option,
    SelectElement,
    ButtonContainer,
    ButtonElememt
} from "./styledCompenents";
import DoctorContext from "../Context/DoctorContext";

class Appointment extends Component {
    state = {
        name: "",
        age: "",
        selectedDoctor: "",
    };

    nameOnChange = (event) => {
        this.setState({ name: event.target.value });
    };

    ageOnChange = (event) => {
        this.setState({ age: event.target.value });
    };

    doctorChange = (event) => {
        this.setState({ selectedDoctor: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault()
        const { name, age, selectedDoctor } = this.state

        if (name.trim() === "" || age.trim() === "" || selectedDoctor === "") {
            alert("Please fill out all fields before booking.")
        } else {
            alert(`Your booking is successful!\nName: ${name}\nDoctor: ${selectedDoctor}`)

        }
    }

    render() {
        const { name, age, selectedDoctor } = this.state;
        console.log("renderinggggg")

        return (
            <DoctorContext.Consumer>
                {({ doctorDetails }) => {
                    return (
                        <MainBackgroundAppointment>
                            <Formelement onSubmit={this.onFormSubmit}>
                                <FormHeading>Book Your Appointment</FormHeading>
                                <LabelElement htmlFor="name">Name</LabelElement>
                                <InputElement
                                    type="text"
                                    placeholder="Enter the Name"
                                    id="name"
                                    value={name}
                                    onChange={this.nameOnChange}
                                    required
                                />
                                <br />

                                <LabelElement htmlFor="age">Age</LabelElement>
                                <InputElement
                                    type="number"
                                    placeholder="Enter the Age"
                                    id="age"
                                    value={age}
                                    onChange={this.ageOnChange}
                                    required
                                />
                                <br />

                                <LabelElement>Select Doctor</LabelElement>
                                <SelectElement value={selectedDoctor} onChange={this.doctorChange}>
                                    <Option value="">Select</Option>
                                    {doctorDetails.map((each) => (
                                        <Option key={each._id} value={each.name} required>
                                            {each.name}
                                        </Option>
                                    ))}
                                </SelectElement>
                                <br />
                                <LabelElement htmlFor="appointmentDate">Appointment Date</LabelElement>
                                <InputElement type="date" id="appointmentDate" name="appointmentDate" required />
                                <br/>
                                <LabelElement htmlFor="appointmentTime">Appointment Time</LabelElement>
                                <InputElement type="time" id="appointmentTime" name="appointmentTime" required />
                                <br/>
                                <ButtonContainer>
                                    <ButtonElememt type="Submit">Submit</ButtonElememt>
                                </ButtonContainer>
                            </Formelement>
                        </MainBackgroundAppointment>
                    )
                }}
            </DoctorContext.Consumer>
        );
    }
}

export default Appointment
