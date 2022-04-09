import { Fragment } from 'react';
import {UserProvider} from './context'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AuthLogin from './pages/AuthLogin';
import AuthSignup from './pages/AuthSignup';
import Home from './pages/HomePage/Home';
import User from './pages/User/User';
function App() {
  return (
    <UserProvider>
      <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}  />
          <Route exact path='/login' element={<AuthLogin/>}  />
          <Route exact path='/signup' element={<AuthSignup/>}  />
          <Route exact path="/user/dashboard" element={<User/>} /> 
        </Routes>
      </BrowserRouter>
      </Fragment>
    </UserProvider>
  );
}

export default App;
