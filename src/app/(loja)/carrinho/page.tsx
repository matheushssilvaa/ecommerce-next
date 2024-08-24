'use client'
import Page from "@/componentes/template/page";
import useCart from "@/app/data/hooks/useCart";
import Link from "next/link";
import AreaItemCarrinho from "@/componentes/carrinho/areaItemCart";
import { IconShoppingCartOff } from "@tabler/icons-react";
import TotalCart from "@/componentes/carrinho/totalCart";

export default function PaginaCarrinho() {
    const { itens, adicionar, remover } = useCart()
    return (
        <Page className="flex flex-col gap-10">
            {itens.length === 0 ? (
                <>
                    <div className='flex flex-col items-center gap-4 text-zinc-500'>
                        <IconShoppingCartOff size={150} stroke={0.5} />
                        <div>
                            <h2 className='text-3xl'>Seu carrinho esta vazio!</h2>
                            <p>Adiciona produtos clicando no botão abaixo</p>
                        </div>
                        <Link href="/" className='bg-green-500 text-white p-2'>
                            Ver produtos
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col gap-5">
                        {itens.map((item) => (
                            <AreaItemCarrinho key={item.product.id} item={item}
                                adicionar={(item) => adicionar(item.product)}
                                remover={(item) => remover(item.product)}
                            />
                        ))}</div>
                        <TotalCart items={itens} />
                </>

            )}
        </Page>
    )
}