import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './layouts/Home/Home'
import Login from './layouts/Login/Login'
import Register from './layouts/Register/Register'

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
