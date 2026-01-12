import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-white/5 border-t border-white/10
        p-6 md:flex justify-around space-y-2">
            <div className="space-y-2">
                <p>Elyes Ben Kilani</p>
                <p>&#169; 2026 - Tous droits réservés</p>
                <p>Construit avec Next.js</p>
            </div>
            <div className="space-y-2 md:text-end">
                <div className="space-x-4 underline">
                    <Link href="#accueil">Accueil</Link>
                    <Link href="#projects">Projets</Link>
                    <Link href="#about">A propos</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <div className="space-x-4 underline">
                    <Link href="">Linkedin</Link>
                    <Link href="">GitHub</Link>
                </div>
                <div>
                    <Link href="/politique-confidentialite"
                    className="underline">Politique de confidentialié</Link>
                </div>
            </div>
        </footer>
    )
}