import { Routes, Route, Navigate } from 'react-router-dom';


import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import CartPage from '../pages/CartPage/CartPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';

const Routers = () => {
  return (
	  <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<HomePage />}></Route>
      <Route path='shop' element={<ShopPage />}></Route>
      <Route path='shop/:id' element={<ProductDetailPage />}></Route>
      <Route path='cart' element={<CartPage />}></Route>
      <Route path='checkout' element={<CheckoutPage />}></Route>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='signup' element={<SignupPage />}></Route>
    </Routes>
  )
}

export default Routers