import { ProductType } from "./types";

export async function getProducts(): Promise<ProductType[]> {
  const res = await fetch("https://amiiboapi.com/api/amiibo/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { amiibo } = await res.json();

  return amiibo;
}
