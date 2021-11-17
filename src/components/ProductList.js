let producListFromStorageArray = [];
if (localStorage.getItem("productList")) {
  producListFromStorageArray = localStorage.getItem("productList").split(",");
  var productList = producListFromStorageArray.map((product, index) => (
    <li className="productListContainter__list--element" key={index}>
      {product}
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
