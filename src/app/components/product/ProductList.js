import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
    </div>
  );
};

export default ProductList;
