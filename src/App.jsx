import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './layouts/Home/Home'

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='' element={ <Home /> } />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
