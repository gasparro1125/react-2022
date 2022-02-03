import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./companyList/list";
import { DetailPage } from "./companyList/detail";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/company-list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};