import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, NotFound, Dashboard } from "./pages/index";
import './App.css'


interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
