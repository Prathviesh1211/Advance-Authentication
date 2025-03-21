import React from 'react'
import FloatingShape from './components/FloatingShape'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import EmailVerificationPage from './pages/EmailVerificationPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emrald-900 flex items-center justify-center relative overflow-hidden'>
      <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0}></FloatingShape>
      <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5}></FloatingShape>
      <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="10%" delay={2}></FloatingShape>
    
     <BrowserRouter>
     <Routes>
        <Route path='/' element='Home'></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/verify-email' element={<EmailVerificationPage/>}></Route>
      </Routes>
      <Toaster></Toaster>
     </BrowserRouter>
    </div>
  )
}

export default App