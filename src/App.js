import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HabiName from './components/habiName';
import HabiResume from './components/habiResume';
import HabiEmail from './components/habiEmail';
import HabiDirection from './components/habiDirection';
import HabiFloor from './components/habiFloor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={[<HabiName />, <HabiResume/>]}/>
        <Route path='/email' element={[<HabiEmail/>,<HabiResume/>]}/>
        <Route path='/direccion' element={[<HabiDirection/>,<HabiResume/>]}/>
        <Route path='/pisoApt' element={[<HabiFloor/>,<HabiResume/>]}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
