import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/home"
import { About } from "./components/Home/About/about";
import { Contact } from "./components/Home/Contact/contact";
import { Cart } from "./components/Home/Cart/cart";
import { Navbar } from "./components/Home/Navbar/navbar";
import { Product } from "./components/Home/products/product";
import { Footer } from "./components/Home/Footer/footer";
import { Login } from "./components/Auth/Login/login";
import { Register } from "./components/Auth/Register/register";
import { Account } from "./components/Home/Profile/account";
import { AuthContextProvider } from "./components/Context/AuthContext";
import { ProtectedRoute } from "./components/Auth/protectedRoute/protectedroute";
function App() {
  return (
    <div>
      <>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<ProtectedRoute>
             <><Navbar/>  <Account /> <Footer/> </>
            </ProtectedRoute>} />
          </Routes>
        </AuthContextProvider>
      </>
      <>
        <Routes>
          <Route path="/home" element={<><Navbar/> <Home/> <Footer/></>} />
          <Route path="/about" element={<><Navbar/> <About/> <Footer/></>} />
          <Route path="/contacts" element={<><Navbar/> <Contact/> <Footer/></>} />
          <Route path="/cart" element={<><Navbar/> <Cart/> <Footer/></>} />
          <Route path="/product" element={<><Navbar/> <Product/> <Footer/></>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
