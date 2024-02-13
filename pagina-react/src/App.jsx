import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Productos from './components/Productos';




function App() {
  return (
    <div>
      <Header />
      <ItemListContainer mensaje = {"no hay stock💀"}/>
      <Productos />
      <Footer />
    </div>
  )
}

export default App;
