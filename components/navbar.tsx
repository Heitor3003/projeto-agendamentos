
import Link from "next/link";

export default function Navbar(){

    return(
    <nav className="p-5 bg-zinc-700 dark:bg-stone-300">
        <div className="flex items-center gap-6">

            <div className="grid grid-cols-1">
                <Link href="/" className="text-xl font-bold text-zinc-200 dark:text-zinc-600 hover:text-stone-400 transition-colors">
                    Barbearia Style
                </Link>
            </div>
            
        <Link href="/sobre" className="text-xl font-bold text-zinc-200 dark:text-zinc-600 hover:text-stone-400 transition-colors">
          Sobre nós
        </Link>

        <Link href="/admin" className="text-xl font-bold text-zinc-200 dark:text-zinc-600 hover:text-stone-400 transition-colors">
          Página de administrador
        </Link>
        </div>
    </nav>
    )
    
}