import './scss/App.scss';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About';
import Coaching from './Components/Coaching/Coaching';
import Contact from './Components/Contact/Contact';
import Instagram from './Components/Instagram/Instagram';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio" element={<About />} />
          <Route path="/koucovani" element={<Coaching />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Instagram />
      </div>
    </BrowserRouter>
  );
};

export default App;
