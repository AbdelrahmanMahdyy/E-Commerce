import { Routes, Route } from "react-router-dom"
import BottomHeader from "./components/header/BottomHeader"
import TopHeader from "./components/header/TopHeader"
import Home from "./page/Home/Home"
import ProductDetails from "./page/ProductDetails/ProductDetails"
import Cart from "./page/Cart/Cart"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
    <header>
      <TopHeader />
      <BottomHeader />
    </header>
    <Toaster position="bottom-right" toastOptions={{
      style:{
        background : '#e9e9e9',
        borderRadius : '5px',
        padding : '14px'
      }
    }}/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>

    </>
  )
}

export default App
