import { Routes, Route } from "react-router-dom";

import Info from '../src/pages/hakkimizda';
import Navbar from '../src/components/navbar'
import Contact from '..//src/pages/iletisim'
import  Products from '..//src/pages/urunler'
import MainPage from '../src/pages/anasayfa'
import Footer from '../src/components/footer'

function App() {
  return (
    <>
    <Navbar />
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/urunler" element={<Products />} />
        <Route path="/hakkimizda" element={<Info />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    
    <Footer/>
    </>


  );
}

export default App;