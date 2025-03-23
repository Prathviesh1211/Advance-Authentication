import React, { Children, useEffect } from 'react'
import FloatingShape from './components/FloatingShape'
import {BrowserRouter, Navigate, Route, Router, Routes} from 'react-router-dom'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import EmailVerificationPage from './pages/EmailVerificationPage'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import DashboardPage from './pages/DashboardPage'
import LoadingSpinner from './components/LoadingSpinner'
import ForgotPasswordPage from './pages/ForgotPasswordPage'

//protect route--> !authenticated-> login 
const ProtectedRoute=({children})=>{
  const {user,isAuthenticated}=useAuthStore();

  if(!isAuthenticated){
    return <Navigate to='/login' replace></Navigate>
  }

  if(!user.isVerified){
    return <Navigate to='/verify-email' replace></Navigate>
  }
  return children
}

//Redirect verified  user to home page
const RedirectAuthenticatedUser=({children})=>{
  const {isAuthenticated,user}=useAuthStore();

  if(isAuthenticated && user.isVerified){
    return <Navigate to='/' replace></Navigate>
  }
  return children
}

const App = () => {

  const {checkAuth,isCheckingAuth,isAuthenticated,user}=useAuthStore()

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  if(isCheckingAuth)return <LoadingSpinner></LoadingSpinner>
  return (
    <div className='min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emrald-900 flex items-center justify-center relative overflow-hidden'>
      <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0}></FloatingShape>
      <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5}></FloatingShape>
      <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="10%" delay={2}></FloatingShape>
    
     <BrowserRouter>
     <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <DashboardPage/>
          </ProtectedRoute>
        }></Route>
        <Route path='/signup' element={
          <RedirectAuthenticatedUser>
            <SignupPage></SignupPage>
          </RedirectAuthenticatedUser>
        }></Route>
        <Route path='/login' element={
          <RedirectAuthenticatedUser>
            <LoginPage/>
          </RedirectAuthenticatedUser>
        }></Route>
        <Route path='/verify-email' element={<EmailVerificationPage/>}></Route>
        <Route path='/forgot-password' element={
          <RedirectAuthenticatedUser>
            <ForgotPasswordPage/>
          </RedirectAuthenticatedUser>
        }></Route>
      </Routes>
      <Toaster></Toaster>
     </BrowserRouter>
    </div>
  )
}

export default App