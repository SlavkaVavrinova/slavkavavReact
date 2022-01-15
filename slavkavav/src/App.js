import './scss/App.scss';

import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Portfolio />
    </div>
  );
};

export default App;
