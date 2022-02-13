import React from 'react';
import './scss/App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home/Home';
import Coaching from './Components/Coaching/Coaching';
import Contact from './Components/Contact/Contact';

import Cv from './Components/Cv/Cv';
import Footer from './Components/Footer/Footer';
import Ux from './Components/Ux/Ux';

import ReactGA from 'react-ga';
ReactGA.initialize('G-CLTPW2WX1R');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/zivotopis" element={<Cv />} />
          <Route path="/koucovani" element={<Coaching />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/ux" element={<Ux />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
