import './scss/App.scss';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home/Home';
import Coaching from './Components/Coaching/Coaching';
import Contact from './Components/Contact/Contact';
import Instagram from './Components/Instagram/Instagram';
import Cv from './Components/Cv/Cv';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/zivotopis" element={<Cv />} />
          <Route path="/koucovani" element={<Coaching />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Instagram />
      </div>
    </BrowserRouter>
  );
};

export default App;
