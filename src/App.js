
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Display from './Components/Display'
import AreaDetail from './Components/AreaDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <>
          <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/display/'} element={<Display />}/>
            <Route path={'/areaDetail/'} element={<AreaDetail />}/>
          </Routes>
       </>
      </BrowserRouter>
    </div>
  );
}

export default App;
