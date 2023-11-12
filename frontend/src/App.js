import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Template from './Components/Template/Template';
import DashBoard from './Components/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<Template/>}>
              <Route index element={<DashBoard/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
