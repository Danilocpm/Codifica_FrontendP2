import { BrowserRouter, Routes, Route } from "react-router-dom"

import { SearchPage } from "./pages/SearchPage"
import { FavoritesProvider } from "./context/FavoritesContext"
import { DetailsPage } from "./pages/DetailsPage"
import { FavoritesPage } from "./pages/FavoritesPage"

function App() {


  return (
    <>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </>
  )
}

export default App
