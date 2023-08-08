import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Contact from './Pages/Contact'
import DemoPage from './Pages/DemoPage'
import DocsPage from './Pages/DocsPage'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'

const Pages = () => {
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/services' element={<Services />}></Route>
                    <Route path='/auth/login' element={<Login />}></Route>
                    <Route path='/auth/signup' element={<Signup />}></Route>
                    <Route path='/register/docs' element={<DocsPage />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/demo/:demoID' element={<DemoPage />}></Route>
                    <Route path='/About/' element={<About />}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer position="top-center" />
        </div>
    )
}

export default Pages
