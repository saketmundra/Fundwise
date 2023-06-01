import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Navbar, Footer } from './components';
import StartupSignup from './components/authentication/startupSignup';
import UserSignupForm from './components/authentication/userSignup';
import LandingPage from './LandingPage';
import UserLogin from './components/authentication/userLogin';
import StartupLogin from './components/authentication/startupLogin';
import AboutPage from './components/AboutPage';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/raise' element={<StartupLogin />} />
        <Route path='/invest' element={<UserLogin />} />
        <Route path='/userSignup' element={<UserSignupForm />} />
        <Route path='/startupSignup' element={<StartupSignup />} />
      </Routes>
      
      {/* <Hero />
      <Cards />
      <Analytics />
      <Newsletter/> */}
      <Footer />
    </div>
  )
}

export default App