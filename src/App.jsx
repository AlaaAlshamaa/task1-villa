
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import Navbar from './component/Navbar/Navbar'

function App() { 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      <Route path='/properties' element= {<Properties/>}/>
      <Route path='/propertyDetails' element= {<PropertyDetails/>}/>
    </Routes>
    </>
  )
}

export default App
