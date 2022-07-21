import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopPage } from "./components/pages/TopPage";
import { HomePage } from "./components/pages/HomePage";
import { SignUpPage } from "./components/pages/SignUpPage";
import { LoginPage } from "./components/pages/LoginPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};
