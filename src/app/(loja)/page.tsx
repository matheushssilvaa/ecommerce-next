'use client'
import Page from "@/componentes/template/page";
import ProductCard from "@/componentes/products/productCard";
import produtos from '../data/constantes/produtos'
import useCart from "../data/hooks/useCart";

export default function Home() {
  const { numero, increment, decrement } = useCart()
  return (
    <Page>
      <div className="flex gap-5 justify-center flex-wrap">
      {
        produtos.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      }
      </div>
    </Page>
  );
}
