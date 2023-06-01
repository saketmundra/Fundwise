import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Navbar, Footer } from './components';
import StartupSignup from './components/authentication/startupSignup';
import UserSignupForm from './components/authentication/userSignup';
import LandingPage from './LandingPage';
import UserLogin from './components/authentication/userLogin';
import StartupLogin from './components/authentication/startupLogin';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/raise' element={<StartupSignup />} />
        <Route path='/invest' element={<UserSignupForm />} />
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/startupLogin' element={<StartupLogin />} />
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