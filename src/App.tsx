import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import About from './Pages/About';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Projects from './Pages/Projects';

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div>
      <nav>
        <Nav />
      </nav>

      <main>
        <Routes>
          <Route element={<Main />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Projects />} path='/projekty' />
          <Route element={<Kontakt />} path='/kontakt' />
          <Route element={<Main />} path='*' />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
