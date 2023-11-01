import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './routes/About';
import MyTown from './routes/MyTown';
import ROUTES from './constants/routes';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route
              path = "/" 
              element={<About/>}
            />
            <Route 
              path ={`/${ROUTES.ABOUT_ME}`} 
              element={<About/>} 
            />
            <Route 
              path ={`/${ROUTES.MY_TOWN}`} 
              element={<MyTown/>} 
            />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
