import './static/styles/App.css';
import Index from "./pages";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostDetail from "./pages/postDetail";
import {AuthContext} from "./context";
import React, {useEffect, useState} from "react";
import PageNotFound from "./pages/pageNotFound";
import Login from "./components/Login";
import Modal from "./components/UI/Modal/Modal";
import Personal from "./pages/personal";
import About from "./pages/about";
import Contacts from "./pages/contacts";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setloading] = useState(true);


    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setloading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            setModalActive,
            isLoading
        }}>
            <Router>
                <Routes>
                    <Route path='*' element={<PageNotFound/>}  />
                    <Route
                        path={'/404/'}
                        element={<PageNotFound/>}
                    />
                    <Route
                        path={'/'}
                        element={<Index/>}
                    />
                    <Route
                        path={'/post/:url/'}
                        element={<PostDetail/>}
                    />
                    <Route
                        path={'/about/'}
                        element={<About/>}
                    />
                    <Route
                        path={'/contacts/'}
                        element={<Contacts/>}
                    />
                    <Route
                        path={'/personal/'}
                        element={<Personal/>}
                    />
                </Routes>
            </Router>

            {!isAuth &&
                <Modal active={modalActive} setActive={setModalActive}>
                    <Login/>
                </Modal>
            }
        </AuthContext.Provider>
  );
}

export default App;
