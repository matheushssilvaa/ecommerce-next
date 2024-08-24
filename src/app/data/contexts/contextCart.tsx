'use client'
import { createContext, useState } from "react"
import ItemCart from "../model/ItemCart"
import Product from "../model/Product"

interface ContextCartProps {
    itens: ItemCart[]
    qtdItens: number
    adicionar?: (item: Product) => void
    remover?: (item: Product) => void
}

const contextCart = createContext<ContextCartProps>({} as any)

export function ProviderCart(props: any) {
    const [itens, setItens] = useState<ItemCart[]>([])

    function adicionar(product: Product) {
       const indice = itens.findIndex((i) => i.product.id === product.id)

       if(indice === -1) {
        setItens([...itens, { product, quantidade: 1 }])
       } else {
        const newItens = [...itens]
        newItens[indice].quantidade++
        setItens(newItens)
       }
    }

    function remover(product: Product) {
        const newItens = itens.map((i) => {
            if(i.product.id === product.id) {
                i.quantidade--
            }
            return i
        }).filter((i) => i.quantidade > 0)
        setItens(newItens)
     }

    return(
        <contextCart.Provider
            value={{
                itens,
                adicionar,
                remover,
                get qtdItens() {
                    return itens.reduce((total, item) => total + item.quantidade, 0)
                }
            }}
        >
        {props.children}
        </contextCart.Provider>
    )
}

export default contextCart