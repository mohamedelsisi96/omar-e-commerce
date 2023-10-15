import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navber/Navbar';
import Home from './Component/Home/Home';
import Productes from './Component/Productes/Productes.jsx'
import Foot from './Component/Foot/Foot';

import Profile from './Component/Profile/Profile';
import Cart from './Component/Cart/Cart.jsx'
import Layout from './Component/Layout/Layout';
import Brands from './Component/Brands/Brands';
import Category from './Component/Category/Category';
import About from './Component/About/About';
import Register from './Component/Register/Register';
import Login from './Component/login/Login';
import Forgetpassword from './Component/Forget/Forgetpassword'
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Notfound from './Component/Notfound/Notfound';
import { Navigate, RouterProvider,createBrowserRouter,createHashRouter } from 'react-router-dom';
import Orders from './Component/Orders/Orders';
import Logout from './Component/Logout/Logout';
import Protected from './Component/Protected/Protected';

 import { Provider } from 'react-redux'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Address from './Component/Address/Address';
import Verify from './Component/Verify/Verify';
import Resetpassword from './Component/Resetpassword/Resetpassword';
import Wishlist from './Component/Wishlist/Wishlist';
import { store } from './Component/Redux/Store';



function App() {
let routers=createHashRouter([
  {path:"",element:<Layout/>,children:[
    {path:"",element:<Navigate  to={'Home'}/>},
    {path:'home',element:<Protected><Home/></Protected>},
    {path:'products',element:<Protected><Productes/></Protected>},
    {path:'logout',element:<Logout/>},
    {path:'login',element:<Login/>},
    {path:'category',element:<Protected><Category/></Protected>},
    {path:'address',element:<Protected><Address/></Protected>},
    {path:'notfound',element:<Notfound/>},
    {path:'brands',element:<Protected><Brands/></Protected>},
    {path:'about',element:<Protected><About/></Protected>},
    {path:'cart',element:<Protected><Cart/></Protected>},
    {path:'profile',element:<Protected><Profile/></Protected>},
    {path:'wishlist',element:<Protected><Wishlist/></Protected>},
    {path:'allorders',element:<Protected><Orders/></Protected>},
    {path:'forgetpassword',element:<Forgetpassword/>},
    {path:'verify',element:<Verify/>},
    {path:'resetpassword',element:<Resetpassword/>},
    {path:'productdetails/:id',element:<Protected><ProductDetails/></Protected>},

    {path:'register',element:<Register/>},
    {path:'orders',element:<Orders/>},
    {path:'*',element:<Notfound/>},
  ]}
])
  return (
    <>
    <Provider store={store}>


   <RouterProvider router={routers}>
    
   </RouterProvider >
   </Provider>
    </>
  );
}


export default App;
