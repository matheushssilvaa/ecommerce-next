import Carrinho from "./carrinho"
import Logo from "./logo"

export default function Cabecalho() {
    return(
        <header className="
                     flex justify-between items-center
                     bg-zinc-800 h-20 px-10
                ">
            <Logo />
            <Carrinho />
        </header>
    )
}