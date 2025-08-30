import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Notification from './components/Notification'
import Home from './pages/home/Home'
import {Routes,Route} from "react-router-dom"
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import AllProducts from './pages/allproducts/AllProducts'
import SinglePage from './pages/singleProductPage/SinglePage'
import Cart from './pages/cart/Cart'
import { useSelector } from 'react-redux'
import Wishlist from './pages/wishlist/WishList'



function App() {

  // const user = useSelector((state) => state.user);

  // if(!user.loggedIn){
  //   return (
  //     <Login/>
  //   )
  // }
  
  return (
   <>
   <Notification/>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/allproducts/:id" element={<SinglePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={ <Wishlist/>} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
   <Footer/>
   </>
  )
}

export default App
