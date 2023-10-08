import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootBoundary from './components/error/RootBoundary'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import HomePreferencePage from './pages/app/HomePreferencePage'
import UpdateKycPage from './pages/app/UpdateKycPage'
import AccountTypePage from './pages/app/accountType/AccountTypePage'
import AccountypeLayout from './layout/AccountypeLayout'
import EstateFormPage from './pages/app/accountType/estate/EstateFormPage'
import EstateVerifyPage from './pages/app/accountType/estate/EstateVerifyPage'
import IndividualFormPage from './pages/app/accountType/individual/IndividualFormPage'
import IndividualVerifyPage from './pages/app/accountType/individual/IndividualVerifyPage'
import CompanyFormPage from './pages/app/accountType/company/CompanyFormPage'
import CompanyVerifyPage from './pages/app/accountType/company/CompanyVerifyPage'
import DashboardLayouPage from './layout/DashboardLayouPage'
import DashboardPage from './pages/app/dashboard/DashboardPage'
import SellerHomesPage from './pages/app/dashboard/SellerHomesPage'
import HomeDetailsPage from './pages/app/dashboard/HomeDetailsPage'
import SellerUploadHomes from './pages/app/dashboard/SellerUploadHomes'
import SellerProfile from './pages/app/dashboard/SellerProfile'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import EmailVerificationPage from './pages/auth/EmailVerificationPage'
import NewPasswordPage from './pages/auth/NewPasswordPage'
import Homepage from './pages/app/Homepage'
import { AppContextProvider } from './context/AppContext'
import AppLayout from './layout/AppLayout'
import AboutUsPage from './pages/app/AboutUsPage'
import ChattingScreen from './pages/app/dashboard/ChattingScreen'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
  // false ? PrivateRoute() : {},
  // ...PublicRoute()
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RootBoundary />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/about', element: <AboutUsPage /> },
    ],
  },
  {
    path: '/account',
    element: (
      <PrivateRoute>
        <AccountTypePage />
      </PrivateRoute>
    ),
  },
  {
    element: (
      <PrivateRoute>
        <AccountypeLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/account/estate',
        // element: <EstateFormPage />,
        children: [
          { index: true, element: <EstateFormPage /> },
          { path: 'process', element: <EstateVerifyPage /> },
        ],
      },
      {
        path: '/account/individual',
        children: [
          { index: true, element: <IndividualFormPage /> },
          { path: 'process', element: <IndividualVerifyPage /> },
        ],
      },
      {
        path: '/account/company',
        children: [
          { index: true, element: <CompanyFormPage /> },
          { path: 'process', element: <CompanyVerifyPage /> },
        ],
      },
    ],
  },
  {
    element: (
      <PrivateRoute>
        <DashboardLayouPage />
      </PrivateRoute>
    ),
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      {
        path: '/homes',
        children: [
          { index: true, element: <SellerHomesPage /> },
          { path: 'details/:id', element: <HomeDetailsPage /> },
          { path: 'add', element: <SellerUploadHomes /> },
        ],
      },
      { path: '/profile', element: <SellerProfile /> },
      { path: '/chats', element: <ChattingScreen /> },
    ],
  },

  {
    path: '/login',
    element: <LoginPage />,
  },
  { path: '/signup', element: <SignupPage /> },
  { path: '/forgot', element: <ForgotPasswordPage /> },
  { path: '/verify', element: <EmailVerificationPage /> },
  { path: '/create', element: <NewPasswordPage /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ToastContainer />
    <App router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
