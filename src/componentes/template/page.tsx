import Cabecalho from "./cabecalho"

export interface pageProps {
    children: React.ReactNode,
    className?: string
}

export default function Page(props: pageProps) {
    return(
        <div className="flex flex-col min-h-screen">
            <Cabecalho />
            <main className={`
                w-[1200px] mx-auto flex-1
                ${props.className ?? ''} py-10
            `}>{props.children}</main>
        </div>
    )
}   