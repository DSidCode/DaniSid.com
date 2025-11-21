import React from 'react';

// 1. Importamos los componentes estructurales que hemos creado
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import ScrollUp from './components/ScrollUp.jsx';

function App() {
  return (
    // 2. Usamos un Fragment (<>) para agrupar los componentes
    <>
      {/*
        Esta es la estructura principal de nuestra página.
        Ahora mismo, estos componentes están vacíos, pero ya están en su sitio.
      */}
      <Nav />
      <Main />
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
