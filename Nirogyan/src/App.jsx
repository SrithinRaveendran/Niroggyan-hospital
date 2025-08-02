import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import DoctorContext from "./components/Context/DoctorContext";

import Home from "./components/Home"
import Header from './components/Header'
import Booking from './components/Booking'
import DetailView from './DetailView'
import Appointment from './components/Appointment';

import './App.css'


function App() {
   const [doctorDetails, setDoctorDetails] = useState([])

   useEffect(() => {
      const apicall = async () => {
         const url = "http://localhost:5000/api/doctors"
         const response = await fetch(url)
         //console.log(response.ok)
         const data = await response.json()
         //console.log(data)
         setDoctorDetails(data)
      };
      apicall()
   }, []);

   return (
      <DoctorContext.Provider value={{doctorDetails}}>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Doctor/:id" element={<DetailView/>}/>
            <Route path="/Appointment" element={<Appointment/>}/>
         </Routes>
      </BrowserRouter>
      </DoctorContext.Provider>
   )

}

export default App
