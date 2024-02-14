import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Productos from './components/Productos';
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Productos />
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
