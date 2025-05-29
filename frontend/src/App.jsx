import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Docs from './components/Docs'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import '../src/css/app.css'
import Login from './components/Login'
import MainFolderContainer from './components/MainFolderContainer'

function App() {
    const [isPassword, setIsPassword] = useState('');
    const password = 'ayso1234'
    const [checkPassword, setCheckPassword] = useState(false)

    useEffect(() => {
        if (isPassword == password) {
            setCheckPassword(true)
        }
    }, [isPassword])




    return (
        <BrowserRouter>
            <main className='app-container'>
                {checkPassword ? (
                    <>
                        <Header />
                        <Routes>
                            <Route path="/" element={<MainFolderContainer />} />
                            <Route path="/documentacion" element={<Docs />} />


                        </Routes>
                        <Footer />
                    </>
                ) : (
                    <>
                        
                        <Login
                            isPassword={isPassword}
                            setIsPassword={setIsPassword}
                        />
                    </>
                )}
            </main>
        </BrowserRouter>
    )
}

export default App
