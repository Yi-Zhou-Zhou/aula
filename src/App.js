import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import PySano from './pages/PySano';
import UVA1 from './pages/UVAS-PYSANO/UVA1';
import UVA3 from './pages/UVAS-PYSANO/UVA3';
import UVA1_AULA from './pages/UVAS-AULA/UVA1';
import UVA2_AULA from "./pages/UVAS-AULA/UVA2";
import UVA3_AULA from "./pages/UVAS-AULA/UVA3";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>z
        <Route path="/UVA1" element={<UVA1_AULA/>}/>
        <Route path="/UVA2" element={<UVA2_AULA/>}/>
        <Route path="/UVA3" element={<UVA3_AULA/>}/>
        <Route path='/PySano' element={<PySano/>}/>
        <Route path='/PySano/UVA1' element={<UVA1/>}/>
        <Route path='/PySano/UVA3' element={<UVA3/>}/>
      </Routes>
    </Router>
  );
}

export default App;
