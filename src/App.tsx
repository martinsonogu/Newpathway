import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './Pages/Navbar';
import { Home } from './Pages/home'
import { Career } from './Pages/career';
import { About } from './Pages/about';
import { ContactFull } from './Pages/contact'
import { Vacancy } from './Pages/vacancy'
import {JobDetails} from "./Pages/jobDetails"
import ScrollToTop from './components/ScrollToTop';
import { Footer } from './Pages/footer';
import { Outreach } from './Pages/services'; 


function App() {

  return (
    <div className=''>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<ContactFull />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/details" element={<JobDetails />} />
        <Route path="/services/outreach" element={<Outreach />} />
        {/* <Route path="/services/test2" element={<Test2 />} />
       <Route path="/services/test3" element={<Test3 />} /> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
