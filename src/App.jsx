import { Routes, Route } from "react-router-dom"
import BottomHeader from "./components/header/BottomHeader"
import TopHeader from "./components/header/TopHeader"
import Home from "./page/Home/Home"
import ProductDetails from "./page/ProductDetails"


function App() {

  return (
    <>
    <header>
      <TopHeader />
      <BottomHeader />
    </header>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>

    </>
  )
}

export default App
