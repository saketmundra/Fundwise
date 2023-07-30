import React, { useContext} from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Landing Page";
import StartupSignup from "./components/authentication/startupSignup";
import UserSignupForm from "./components/authentication/userSignup";
import LandingPage from "./LandingPage";
import UserLogin from "./components/authentication/userLogin";
import StartupLogin from "./components/authentication/startupLogin";
import AboutPage from "./components/AboutPage";
import Listing from "./components/Listing";
// import { AuthContext } from "../src/store/AuthContext";
import CompanyPage from "./components/Company Page/CompanyPage";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Holdings from "./components/Holdings/Holdings";
const App = () => {
  const isLoggedIn = useSelector((state)=>state.login.value);

  return (
    <div>
      {console.log(isLoggedIn)}
      <Navbar loggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/companies" element={isLoggedIn? <Listing /> :<LandingPage />}/>
        <Route path="./holdings" element={<Holdings/>}></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/raise" element={<StartupLogin />} />
        <Route path="/invest" element={<UserLogin />} />
        <Route path="/userSignup" element={<UserSignupForm />} />
        <Route path="/startupSignup" element={<StartupSignup />} />
        <Route path="/companies/:id" element={<CompanyPage />} />
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
