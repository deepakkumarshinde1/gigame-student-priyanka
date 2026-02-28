import React, { useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactOffOne from "./components/ContactOffOne";
import ContactOffTwo from "./components/ContactOffTwo";
import User from "./components/User";
import Login from "./components/Login";
import ProtectedRouter from "./components/ProtectedRouter";
import Header from "./components/Header";

function App() {
  let [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="" element={<Navigate to="/contact/office-1" />} />
          <Route path="office-1" element={<ContactOffOne />} />
          <Route path="office-2" element={<ContactOffTwo />} />
        </Route>
        <Route
          path=""
          element={<ProtectedRouter isLogin={isLogin} type={false} />}
        >
          <Route path="/login" element={<Login />} />
        </Route>
        <Route
          path=""
          element={<ProtectedRouter isLogin={isLogin} type={true} />}
        >
          <Route path="/user-profile" element={<User />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
