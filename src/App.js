import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/home"
import { About } from "./components/Home/About/about";
import { Contact } from "./components/Home/Contact/contact";
import { Cart } from "./components/Home/Cart/cart";
import { Navbar } from "./components/Home/Navbar/navbar";
import { Product } from "./components/Home/products/product";
import { Footer } from "./components/Home/Footer/footer";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
