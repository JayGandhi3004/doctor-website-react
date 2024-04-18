import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import About from './pages/About';
import Department from './pages/Department'
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageDoctor from './pages/PageDoctor';
import Testimonial from './pages/Testimonial';
import Error from './pages/Error';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Success from './pages/Success';
import Modern from './pages/Modern';
import Certified from './pages/Certified';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/success" element={<Success />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/certified" element={<Certified />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pagedoctor" element={<PageDoctor />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/error" element={<Error />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
