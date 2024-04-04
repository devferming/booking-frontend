import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
//import UnknownPages from './pages/UnknownPages'
import HotelInfoPage from './pages/HotelInfoPage'
import HeaderShared from './components/shared/HeaderShared'
import ReservationPage from './pages/ReservationPage'
import ProtectesRoutes from './pages/ProtectesRoutes'

function App() {

  return (
    <div>
      <HeaderShared/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hotel/:id' element={<HotelInfoPage />} />
        <Route element={<ProtectesRoutes />}>
          <Route path='/reservations' element={<ReservationPage />} />
        </Route>
        <Route path='*' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
