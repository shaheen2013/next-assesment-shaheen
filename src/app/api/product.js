import { API_BASE_PATH } from "@/app/utils/constant";

export async function getAllProducts(){
    const res = await fetch(`${API_BASE_PATH}/products`)
    const data = await res.json();
    return data;
}

export async function getProduct(id){
    const res = await fetch(`${API_BASE_PATH}/products/${id}`)
    const data = await res.json();
    return data;
}