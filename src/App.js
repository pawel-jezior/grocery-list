import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const textInput = React.createRef();

  //todo: dorobic przycisk do czyszczenia listy produktow
  //todo: przy kazdym produkcie przycisk do usuwania go
  //todo: klikniecie na produkt zaznacza, ze jest zielony lub bialy, domyslnie bialy (oznacza, ze jeszcze nie kupione)
  //todo: automatyczne usuwanie duplikatow ze storage

  const addNewProductToStorage = (e) => {
    if (textInput.current.value !== "") {
      if (getProductListFromStorage()) {
        const productListFromStorage = getProductListFromStorage().split(",");
        if (productListFromStorage.indexOf(textInput.current.value) == -1){
          productListFromStorage.push(textInput.current.value);
        saveProductListToStorage(productListFromStorage);
        } 
      } else {
        saveProductListToStorage(textInput.current.value);
      }
      clearInput();
    }
  };

  const clearInput = () => {
    textInput.current.value = "";
  };

  const saveProductListToStorage = (productFronInput) => {
    localStorage.setItem("productList", productFronInput);
  };

  const getProductListFromStorage = () => {
    return localStorage.getItem("productList");
  };

  const refresh = () => {window.location.reload(false)}

  return (
    <div className="app">
      <form className="app__enterProduct">
        <input ref={textInput} type="text" placeholder="Wprowadź produkt" />
      </form>
      <button
        className="app__submitProduct"
        onClick={() => {
          addNewProductToStorage();
          refresh();
        }}
      >
        SUBMIT
      </button>
      <ProductList/>
    </div>
  );
};

export default App;
