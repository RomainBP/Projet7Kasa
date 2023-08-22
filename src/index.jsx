import React from 'react'
import './styles/app.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Appartment from './pages/Appartment'
import Concerning from './pages/Concerning'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Concerning" element={<Concerning />} />
                <Route
                    path="/Appartment/:locationId"
                    element={<Appartment />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
