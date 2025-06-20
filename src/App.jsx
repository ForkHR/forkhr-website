import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/navigation/Header"
import Err404page from "./pages/Err404page"
import Footer from "./components/navigation/Footer"
import TermsOfService from "./pages/TermsOfService"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Mission from "./pages/Mission"
import Login from "./pages/Login"
import TeamManagement from "./pages/TeamManagement"
import Pricing from "./pages/Pricing"
import Scheduler from "./pages/Scheduler"
import Onboarding from "./pages/Onboarding"
import TimeTracking from "./pages/TimeTracking"
import Documents from "./pages/Documents"
import Surveys from "./pages/Surveys"
import Announcements from "./pages/Announcements"
import Reviews from "./pages/Reviews"

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
            <Route path="/onboarding" element={<Onboarding/>} />
            <Route path="/documents" element={<Documents/>} />
            <Route path="/surveys" element={<Surveys/>} />
            <Route path="/announcements" element={<Announcements/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/time-tracking" element={<TimeTracking/>} />
            <Route path="/team-management" element={<TeamManagement/>} />
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
