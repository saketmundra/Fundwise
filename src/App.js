import React from 'react'
import { Hero, Navbar, Analytics, Newsletter, Cards, Footer } from './components'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Analytics />
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default App