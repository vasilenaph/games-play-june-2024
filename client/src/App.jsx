import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameList from './components/game-list/GameList'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import { AuthContext } from './contexts/AuthContext'

function App() {
    // TODO: Remove this from App Component
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAutheticated: !!authState.email,
        changeAuthState,
    }

    return (
        <AuthContext.Provider value={contextData}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/games' element={<GameList />} />
                        <Route path='/games/create' element={<GameCreate />} />
                        <Route path='/games/:gameId/details' element={<GameDetails />} />
                        <Route path='/logout' element="" />
                    </Routes>
                </main>

            </div>
        </AuthContext.Provider>
    )
}

export default App
