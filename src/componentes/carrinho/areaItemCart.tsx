import ItemCart from '@/app/data/model/ItemCart'
import { IconMinus, IconPlus, IconX } from '@tabler/icons-react'
import Image from 'next/image'

export interface AreaItemCarrinhoProps {
    item: ItemCart[]
    adicionar?: (item: ItemCart) => void
    remover?: (item: ItemCart) => void
}

export default function AreaItemCarrinho(props: AreaItemCarrinhoProps) {
    return (
        <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
            <div className="relative w-28 h-28">
                <Image
                    src={props.item.product.imagem}
                    alt={props.item.product.nome}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col justify-center flex-1">
                <span className="text-xl font-bold">{props.item.product.nome}</span>
                <span className="text-sm text-zinc-400">{props.item.product.descricao}</span>
                <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
                    <span>R$ {props.item.product.preco.toFixed(2)}</span>
                    <IconX size={20} />
                    <span>{props.item.quantidade}</span>
                    <span>=</span>
                    <span className="text-yellow-500">
                        R$ {(props.item.product.preco * props.item.quantidade).toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="flex gap-2 items-center px-5">
                <button onClick={() => props.remover?.(props.item)}>
                    <IconMinus />
                </button>
                <span className="flex px-4 py-2 rounded-md bg-black">{props.item.quantidade}</span>
                <button onClick={() => props.adicionar?.(props.item)}>
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}