import {Navigate,Route,Routes} from 'react-router-dom'
import {Layout} from './components/Layout'
import {CartPage} from './pages/CartPage'
import {CheckoutPage} from './pages/CheckoutPage'
import {HomePage} from './pages/HomePage'
import {ProductPage} from './pages/ProductPage'
export default function App(){return <Routes><Route element={<Layout/>}><Route index element={<HomePage/>}/><Route path="product/:productId" element={<ProductPage/>}/><Route path="cart" element={<CartPage/>}/><Route path="checkout" element={<CheckoutPage/>}/></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes>}
