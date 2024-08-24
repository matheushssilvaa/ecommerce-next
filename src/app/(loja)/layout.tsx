'use client'
import { ProviderCart } from "../data/contexts/contextCart"

export default function Layout(props: any) {
    return (
        <div className="border border-blue-500">
            <ProviderCart>{props.children}</ProviderCart>
        </div>
    )
}