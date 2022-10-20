import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/ContactUs/contact';
import Home from './components/Home/home';
import Login from './components/Registeration/login';
import Signup from './components/Registeration/signup';
import Resetpassword from './components/Registeration/resetpassword';

function App() {
  return (
   <>

    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='contact' element={<Contact />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='signup' element={<Signup />} />
        <Route exact path='reset' element={<Resetpassword />} />

     </Routes>
      </BrowserRouter>
    
   </>
      
   
  );
}

export default App;
