import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";
import Header from "../header";
import ErrorBoundry from "../error-boundry";
import HistoryPage from "../history-page";
import HomePage from "../home-page";
import PokemonsPage from "../pokemons-page";
import StubComponent from "../stub-component"
import { useSelector } from "react-redux";

const App = () => {

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`body-${theme}`}>
      <ErrorBoundry>
        <BrowserRouter>
          <Header theme={theme}/>
            <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="history" element={<HistoryPage theme={theme}/>} />
              <Route path="pokemons" element={<PokemonsPage />} />
              <Route path="*" element={<StubComponent />} />
            </Routes>
            </main>
        </BrowserRouter>
      </ErrorBoundry>
    </div>
  )
}

export default App;

