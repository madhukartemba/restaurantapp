import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link

} from 'react-router-dom';

import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantUpdate from './components/RestaurantUpdate';
import Home from './components/Home';
import NavBarMenu from './components/NavBarMenu';


import { Navbar, Nav, Container } from 'react-bootstrap';
import RestaurantDelete from './components/RestaurantDelete';
import Login from './components/Login';
import Logout from './components/Logout';
import { CommonContext } from './components/CommonContext';
import { useState } from 'react';

function App() {

  let [loginStatus, setLoginStatus] = useState(false);

  const updateLoginStatus = (st) => {
    setLoginStatus(st);
  }


  return (
    <div className="App">
      <CommonContext.Provider value={{ loginStatus, updateLoginStatus }} >
        <Router>
          <NavBarMenu />



          <Routes>
            <Route path='/' exact={true} element={<Home />} />
            <Route path='/list' element={<RestaurantList />} />
            <Route path='/create' element={<RestaurantCreate />} />
            <Route path='/update/:id' element={<RestaurantUpdate />} />
            <Route path='/detail' element={<RestaurantDetail />} />
            <Route path="/delete/:id" element={<RestaurantDelete />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </CommonContext.Provider>
    </div>
  );
}

export default App;
