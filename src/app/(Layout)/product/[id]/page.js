import { getProduct } from "@/app/api/product";
import ProductDetail from "@/app/components/product/ProductDetail";

export default async function Page({ params }){

    const data = await getProduct(params.id);

    return <ProductDetail product={data}/>
}