import { getAllProducts } from './api/product';
import ProductList from './components/product/ProductList';

export default async function Home() {
  const data = await getAllProducts();

  return (
    <ProductList products={data} />
  )
}
