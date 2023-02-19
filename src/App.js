import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/home/Home';
import Catagolo from './pages/catálogos/catalogos';
import Contato from './pages/contato/Contato';

//components
import Navbar from './component/navbar/Navbar'
import Header from './component/header/Header'


function App() {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/categoria' element={<Catagolo/>}/>
        <Route path='contato' element={<Contato/>}/>
      </Routes>
    </Router>
  );
}

export default App;
