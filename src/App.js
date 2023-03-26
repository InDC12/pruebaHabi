import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Steps } from "./steps"


function App() {
  const routeComponents = Steps.map(({path,component}, key) => <Route path={path} element={component} key={key}/>);
  console.log(routeComponents);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {routeComponents}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
