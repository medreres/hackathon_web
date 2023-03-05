import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import CreateProject from './pages/CreateProject'
import DiscoverProjects from './pages/DiscoverProjects'
import RateProjects from './pages/RateProjects'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/create-project"
          element={<CreateProject />}
        />
        <Route
          path="/discover-projects"
          element={<DiscoverProjects />}
        />
        <Route
          path="/rate-projects"
          element={<RateProjects />}
        /> 
        <Route
          path="/user-profile"
          element={<UserProfile />}
        />    
      </Routes>
      <Footer />

    </div>
  )
}

export default App
