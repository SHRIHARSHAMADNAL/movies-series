
import './App.css';
import { Header } from './components/common/Header/Header'
import { Home } from './components/Home/Home';
import { Footer } from './components/common/Footer/Footer';
import { Series } from './components/series/Series';
import { Movies } from './components/movies/Movies';
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
   
      <Routes>
      <Route path="/*" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
    <Footer/>
    </div>

  );
}

export default App;
