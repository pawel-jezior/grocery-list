import React from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const textInput = React.createRef();

  //todo: mozliwosc instalacji na telefonie
  //todo: update plik readme
  //todo: update description
  //todo: uzywac ;)

  const addNewProductToStorage = (e) => {
    if (textInput.current.value !== "") {
      if (getProductListFromStorage()) {
        const productListFromStorage = getProductListFromStorage().split(",");
        if (productListFromStorage.indexOf(textInput.current.value) == -1) {
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

  const refresh = () => {
    window.location.reload(false);
  };

  const deleteExistingListFromStorage = () => {
    localStorage.removeItem("productList");
  };

  return (
    <div className="app">
      <div className="app__firstSection">
       <form className="app__enterProduct">
        <input
          className="app__enterProduct--input"
          ref={textInput}
          type="text"
          placeholder="Produkt"
          maxLength="50"
        />
      </form>
      <button
        className="app__submitProduct"
        onClick={() => {
          addNewProductToStorage();
          refresh();
        }}
      ></button>
      <button
        className="app__newList"
        onClick={() => {
          deleteExistingListFromStorage();
          refresh();
        }}
      >
        NEW
      </button> 
      </div>
      <div className="app__secondSection">
        <ProductList />
      </div>
    </div>
  );
};

export default App;
