import React from "react";
import { useNavigate } from "react-router-dom";

export const ChosePage= () => {
  const navigate = useNavigate();

  const handleNavigationCompanyList = () => {

      navigate("/company-list");
  };

  const handleNavigationRickAndMortyList = () => {
      navigate("/rickAndMorty-list");
  };

  return (
    <>
      <h2>Hello chose what do you want</h2>
      <h3> Go to Company list</h3>
      <button onClick={handleNavigationCompanyList}>List</button>
      <h3> Go to Rick And Morty list</h3>
      <button onClick={handleNavigationRickAndMortyList}>List</button>
    </>
  );
};