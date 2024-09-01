import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './layouts/Home/Home'
import Login from './layouts/Login/Login'
import Register from './layouts/Register/Register'
import Navbar from './components/commons/Navbar'
import Product from './layouts/Product/Product'
import CreateProduct from './layouts/CreateProduct/CreateProduct'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product/create' element={<CreateProduct />} />
            <Route path='/product/:productId' element={<Product />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
