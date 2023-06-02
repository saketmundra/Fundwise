import React, { useContext} from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import StartupSignup from "./components/authentication/startupSignup";
import UserSignupForm from "./components/authentication/userSignup";
import LandingPage from "./LandingPage";
import UserLogin from "./components/authentication/userLogin";
import StartupLogin from "./components/authentication/startupLogin";
import AboutPage from "./components/AboutPage";
import Listing from "./components/Listing";
import { AuthContext } from "../src/store/AuthContext";
import CompanyPage from "./components/Company Page/CompanyPage";
const App = () => {
  const isLoggedIn = useContext(AuthContext).isLoggedIn;

  return (
    <div>
      <Navbar loggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={!isLoggedIn ? <LandingPage /> : <Listing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/raise" element={<StartupLogin />} />
        <Route path="/invest" element={<UserLogin />} />
        <Route path="/userSignup" element={<UserSignupForm />} />
        <Route path="/startupSignup" element={<StartupSignup />} />
        <Route path="/:id" element={<CompanyPage />} />
      </Routes>

      {/* <Hero />
      <Cards />
      <Analytics />
      <Newsletter/> */}
      <Footer />
    </div>
  );
};

export default App;
