import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Home from "./pages/home/Home"
import "./app.css"

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
