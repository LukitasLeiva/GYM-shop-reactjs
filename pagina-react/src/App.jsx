import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div>
      <Header />
      <ItemListContainer mensaje = {"no hay stock💀"}/>
      <Footer />
    </div>
  )
}

export default App;
