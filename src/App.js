import React ,{useEffect} from 'react'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HomePage from './components/navbar/HomePage'
import FeatureSection from './components/navbar/FeatureSection'
import Benefits_page1 from './components/navbar/Benefits_page1'
import Benefits_page2 from './components/navbar/Benefits_page2'
import Benefits_page3 from './components/navbar/Benefits_page3'
import { Route, Routes } from 'react-router-dom'
import For_us from './components/navbar/For_us'
import Blog from './components/navbar/Blog'
const App = () => {
  
  
  return (
    <div className=' overflow-x-hidden h-auto '>
      <Navbar/>
   

 

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Page1' element={<Benefits_page1/>}/>
        <Route path='/Page2' element={<Benefits_page2/>}/>
        <Route path='/Page3' element={<Benefits_page3/>}/>
        <Route path='/feature' element={<FeatureSection/>}/>
        <Route path='/forUs' element={<For_us/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>

  )
}


export default App
