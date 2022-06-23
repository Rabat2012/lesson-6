import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import CounterContextProvider from "./contexts/counterContext";

const App = () => {
  return (
    <CounterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  );
};

export default App;
