import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Sign from './pages/Sign';
import './App.css';
import Jobs from './pages/Jobs';
import Science from './pages/Science';
import Arts from './pages/Arts';
import Commerce from './pages/Commerce';
import CareerDetails from './pages/CareerDetails';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/career' element={<Careers/>}/> */}
        <Route path='/career' element={<ProtectedRoute message="Sign in to view Career roadmaps."><Careers/>
        </ProtectedRoute> } />
        <Route path='/career/:careerId' element={<ProtectedRoute message="Sign in to view Career roadmaps."><CareerDetails/></ProtectedRoute>} />
        <Route path='/job' element={ <ProtectedRoute message="Sign in to view Jobs."> <Jobs /> </ProtectedRoute> } />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        {/* <Route path='/job' element={<Jobs/>}/> */}
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/sign' element={<Sign/>}/>
        <Route path="/science" element={<Science/>} />
        <Route path="/arts" element={<Arts/>} />
        <Route path="/commerce" element={<Commerce/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
