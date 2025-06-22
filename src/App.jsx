import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/navigation/Header"
import Err404page from "./pages/Err404page"
import Footer from "./components/navigation/Footer"
import TermsOfService from "./pages/TermsOfService"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Mission from "./pages/Mission"
import Login from "./pages/Login"
import Pricing from "./pages/Pricing"
import Scheduler from "./pages/Scheduler"
import TimeTracking from "./pages/TimeTracking"
import RetentionAndEngagement from "./pages/RetentionAndEngagement"
import StaffHr from "./pages/StaffHr"

function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header/>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/mission" element={<Mission/>} />
            <Route path="/scheduler" element={<Scheduler/>} />
            <Route path="/time-tracking" element={<TimeTracking/>} />
            <Route path="/staff-hr" element={<StaffHr/>} />
            <Route path="/retention-and-engagement" element={<RetentionAndEngagement/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/terms-of-service" element={<TermsOfService/>} />
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
