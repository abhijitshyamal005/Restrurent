import "./App.css";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Home from "./pages/Home";
import Sucess from "./pages/Sucess";
import Notfound from "./pages/Notfound";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/sucess" element={<Sucess/>} />
        <Route exact path="*" element={<Notfound/>} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
