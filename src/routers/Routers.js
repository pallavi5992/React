import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../containers/pages/Dashboard'
import Doctorprofile from '../containers/pages/Doctorprofile'
import Login from '../containers/pages/Login'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Patients from '../containers/pages/Patients'
import PatientsScreen from '../containers/pages/PatientsScreen'
import PatientList from '../containers/pages/PatientList'
import AddPrescription from '../containers/pages/AddPrescription'
import DoctorList from '../containers/pages/DoctorList'
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/header" element={<Header />} />
      <Route path="/doctorprofile" element={<Doctorprofile />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/PatientsScreen" element={<PatientsScreen />} />
      <Route path="/PatientList" element={<PatientList />} />
      <Route path="/addPrescription" element={<AddPrescription/>} />
      <Route path="/doctor" element={<DoctorList/>} />


      
    </Routes>

  )
}

export default Routers