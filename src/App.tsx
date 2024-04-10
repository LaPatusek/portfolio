import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';

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
      <Header />
      {/* body */}
    </div>
  );
}

export default App;
