let producListFromStorageArray = [];

const deleteThisProduct = (product) => {
  const arrayyyyy = localStorage.getItem("productList").split(",");

  const index = arrayyyyy.indexOf(product);
  console.log(index);
  if (index > -1) {
    arrayyyyy.splice(index, 1);
  }
  localStorage.setItem("productList", arrayyyyy);
};

const refresh = () => {
  window.location.reload(false);
};

if (localStorage.getItem("productList")) {
  producListFromStorageArray = localStorage.getItem("productList").split(",");
  var productList = producListFromStorageArray.map((product, index) => (
    <li className="productListContainter__list--element" key={index}>
      {product}
      <button
        className="productListContainter__list--element-deleteButton"
        onClick={() => {
          deleteThisProduct(product);
          refresh();
        }}
      >
        usuń
      </button>
    </li>
  ));
}

const Product = () => {
  return (
    <div className="productListContainter">
      <ul className="productListContainter__list">{productList}</ul>
    </div>
  );
};

export default Product;
