import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';

import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/serviceDetail/:serviceId' element={<ServiceDetail></ServiceDetail>} ></Route>
        <Route path='/checkout/:serviceId' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/addService' element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
