import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import NotFound from './components/NotFound.jsx'
import Dashboard from './components/Dashboard.jsx'
import Profile from './components/Profile.jsx'
import Setting from './components/Setting.jsx'
import Order from './components/Order.jsx'
import Checkout from './components/Checkout.jsx'
import Cart from './components/Cart.jsx' 
import Product from './components/Product.jsx' 
import { AuthProvider } from './components/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav style={{ padding: '15px', backgroundColor: '#333', color: 'white' }}>
         <Link to='/' style={{ color: 'white', marginRight: '10px' }}>Home</Link> | 
         <Link to='/products' style={{ color: 'white', margin: '0 10px' }}>Products</Link> | 
         <Link to='/cart' style={{ color: 'white', margin: '0 10px' }}>Cart</Link> | 
         <Link to='/dashboard/profile' style={{ color: 'white', margin: '0 10px' }}>Profile</Link> | 
         <Link to='/login' style={{ color: 'white', marginLeft: '10px' }}>Login</Link>
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Product />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            
            {/* Trang Checkout thường cũng cần được bảo vệ */}
            <Route path='/checkout' element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } />

        
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }>
              <Route path='profile' element={<Profile />} />
              <Route path='setting' element={<Setting />} />
              <Route path='order' element={<Order />} />
            </Route>
            
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App