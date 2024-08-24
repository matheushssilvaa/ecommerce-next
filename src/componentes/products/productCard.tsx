import useCart from "@/app/data/hooks/useCart"
import Product from "@/app/data/model/Product"
import Image from "next/image"

export interface productCartProps {
    product: Product
}

export default function ProductCard(props: productCartProps) {
    const {adicionar} = useCart()
    const { nome, descricao, preco, imagem } = props.product
    return(
        <div className="flex flex-col w-72 bg-zinc-900">
            <div className="relative w-72 h-52">
               <Image src={imagem} alt={nome} fill className="object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl font-semibold mt-2">{nome}</h2>
                <span className="flex-1 text-sm text-zinc-400">{descricao}</span>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold mt-2">R${preco.toFixed(2)}</span>
                    <button onClick={() => adicionar(props.product)} className="border rounded-full px-5 py-1 text-sm">Adicionar</button>
                </div>
                
            </div>
        </div>
    )
}