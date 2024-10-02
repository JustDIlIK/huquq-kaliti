import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import './locales/i18n.js'
import React from "react";

function App() {

  return (
    <BrowserRouter>
        <div className="wrapper">
            <AppRouter/>
        </div>
    </BrowserRouter>
  )
}

export default App
