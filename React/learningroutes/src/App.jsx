import { BrowserRouter, Routes, Route } from "react-router-dom"

import RouteLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Post from "./pages/Post"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteLayout/>}>
          <Route index element={<Home/>} />
          <Route path="sobre" element={<Sobre/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="posts/:id" element={<Post/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
