import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/pages/Home/home';
import Contact from './components/pages/Contact/contact';
import NewProject from './components/pages/NewProject/newProject';
import Company from './components/pages/Company/company';
import Container from './components/layout/Container/container';
import Navbar from './components/layout/Navbar/navbar';
import Footer from './components/layout/Footer/footer';
import Projects from './components/pages/Projects/projects';
import Project from './components/pages/Project/project';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar imgSrc='https://images.vexels.com/media/users/3/157332/isolated/preview/9c1a0590528c68138bc08d9df0942f9d-icone-de-moeda-dolar.png'/>
        <Container customClass='min-height'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/newProject' element={<NewProject />}></Route>
              <Route path='/company' element={<Company />}></Route>
              <Route path='/projects' element={<Projects />}></Route>
              <Route path='/projects/:id' element={<Project />}></Route>
            </Routes>
        </Container>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
  