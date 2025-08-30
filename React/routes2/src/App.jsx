import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./context/Auth"

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
          </Routes>

        </Router>
      </AuthProvider>
    </>
  )
}

export default App
