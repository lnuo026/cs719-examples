import {PUBLIC_API_BASE_URL} from "env/static/public";

const CUSTOMERS_URL = `${PUBLIC_API_BASE_URL}/customers`;

export async function load({fetch}){
    const res = await fetch(CUSTOMERS_URL);
    const customers  = await res.json();
    return {customers};
}