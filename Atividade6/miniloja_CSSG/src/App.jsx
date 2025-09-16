import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


const PRODUCTS = [
  { id: 1, title: 'Fone Bluetooth Pro Max com Cancelamento de Ruído', price: 499.9, rating: 4.6, tag: 'Novo', image: 'https://picsum.photos/seed/prod1/512' }, // Produto 1
  { id: 2, title: 'Teclado Mecânico RGB Hot-Swap ABNT2', price: 329.0, rating: 4.8, tag: 'Promo', image: 'https://picsum.photos/seed/prod2/512' }, // Produto 2
  { id: 3, title: 'Mouse Gamer 26k DPI com Sensor Óptico', price: 259.9, rating: 4.5, tag: 'Novo', image: 'https://picsum.photos/seed/prod3/512' }, // Produto 3
  { id: 4, title: 'Monitor 27" 144Hz IPS QHD', price: 1899.0, rating: 4.7, tag: 'Promo', image: 'https://picsum.photos/seed/prod4/512' }, // Produto 4
  { id: 5, title: 'Webcam 1080p com Microfone e Tampa de Privacidade', price: 189.0, rating: 4.3, tag: 'Novo', image: 'https://picsum.photos/seed/prod5/512' }, // Produto 5
  { id: 6, title: 'Cadeira Ergonômica com Apoio Lombar', price: 1299.0, rating: 4.4, tag: 'Promo', image: 'https://picsum.photos/seed/prod6/512' } // Produto 6
];


function App() {


  return (
    <ThemeProvider>
      <BrowserRouter>
      <NavBar/>
      <main>
        
      </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

