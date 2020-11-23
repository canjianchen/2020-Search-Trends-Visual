import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { NavBar } from './components/NavBar';
// import { InfoCard } from './components/Card';
// import { Container, Row, Col } from 'react-bootstrap';
import { TestGraph } from './components/TestGraph';
import { JanGraph } from './components/JanGraph';
import { FebGraph } from './components/FebGraph';
import { MarGraph } from './components/MarGraph';
import { AprGraph } from './components/AprGraph';
import { MayGraph } from './components/MayGraph';
import { JunGraph } from './components/JunGraph';
import { JulGraph } from './components/JulGraph';
import { AugGraph } from './components/AugGraph';
import { SepGraph } from './components/SepGraph';
import { OctGraph } from './components/OctGraph';
import { NovGraph } from './components/NovGraph';
import { JumbotronSect } from './components/Jumbotron';
import { useEffect } from 'react';

function App() {
  useEffect(() =>{
    AOS.init({
      duration:1500,
      offset: 230
    });
  },[])

  return (
    <div className="App">

      <NavBar />
      <JumbotronSect />
      <section class="spikes"></section>
      <div data-aos="fade-up"><TestGraph /></div>
      <div data-aos="fade-up" ><JanGraph /></div>
      <div data-aos="fade-up"><FebGraph /></div>
      
      <div data-aos="fade-up"><MarGraph /></div>
      <div data-aos="fade-up"><AprGraph /></div>
      <div data-aos="fade-up"><MayGraph /></div>
      <div data-aos="fade-up"><JunGraph /></div>
      <div data-aos="fade-up"><JulGraph /></div>
      <div data-aos="fade-up"><AugGraph /></div>
      <div data-aos="fade-up"><SepGraph /></div>
      <div data-aos="fade-up"><OctGraph /></div>
      <div data-aos="fade-up"><NovGraph /></div>
      
    </div>
  );
}

export default App;
