import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/navigation/Header"
import Err404page from "./pages/Err404page"
import Footer from "./components/navigation/Footer"
import Vendors from "./pages/Vendors"
import TermsOfService from "./pages/TermsOfService"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Mission from "./pages/Mission"
import Login from "./pages/Login"
import ContactSales from "./pages/ContactSales"
import Supply from "./pages/Supply"
import TeamManagement from "./pages/TeamManagement"
import WorkInProgress from "./pages/WorkInProgress"
import Pricing from "./pages/Pricing"

function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header/>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/vendors" element={<WorkInProgress><Vendors/></WorkInProgress>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/mission" element={<Mission/>} />
            <Route path="/products/supply" element={<Supply/>} />
            <Route path="/products/team-management" element={<TeamManagement/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/terms-of-service" element={<TermsOfService/>} />
            <Route path="/demo" element={<ContactSales/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Err404page/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
