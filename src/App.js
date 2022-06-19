import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import UVA1 from './pages/UVA1';
import PySano from './pages/PySano';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/PySano' element={<PySano/>}/>
      </Routes>
    </Router>
  );
}

export default App;
