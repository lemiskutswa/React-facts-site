import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

export default function App () {
  return (
  <div>
      <Header />
      <MainContent />
      <Footer />
  </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


