import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './static/styles/App.scss';
import Index from './pages';
import PageNotFound from './pages/pageNotFound';
import PostDetail from './pages/postDetail';
import Login from './components/Login';
import Modal from './components/UI/Modal/Modal';
import Personal from './pages/personal';
import About from './pages/about';
import Contacts from './pages/contacts';
import AuthContext from './context';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, setModalActive, isLoading }}>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/404/"
            element={<PageNotFound />}
          />
          <Route
            path="/"
            element={<Index />}
          />
          <Route
            path="/post/:url/"
            element={<PostDetail />}
          />
          <Route
            path="/about/"
            element={<About />}
          />
          <Route
            path="/contacts/"
            element={<Contacts />}
          />
          <Route
            path="/personal/"
            element={<Personal />}
          />
        </Routes>
      </Router>

      {!isAuth && (
        <Modal active={modalActive} setActive={setModalActive}>
          <Login />
        </Modal>
      )}
    </AuthContext.Provider>
  );
}

export default App;
