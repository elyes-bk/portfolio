import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const links = [
        { name: "Accueil", href: "#accueil" },
        { name: "Projets", href: "#projects" },
        { name: "Parcours", href: "#about" },
        { name: "Contact", href: "#contact" },
    ]

    const socials = [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/elyesbk/" },
        { name: "GitHub", href: "https://github.com/elyes-bk" },
    ]

    return (
        <footer className="relative mt-20 bg-main-bg border-t border-white/5 overflow-hidden">
            {/* Background Decor */}

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-6">
                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-2xl font-black text-white tracking-tighter">
                            ELYES <span className="text-purple-500">.</span>
                        </h3>
                        <p className="text-white/40 max-w-sm font-light leading-relaxed">
                            Développeur web passionné par la création d'expériences numériques créatives et sécurisées.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Navigation</h4>
                        <ul className="space-y-4">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/40 hover:text-white transition-colors font-light">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials & Legal */}
                    <div className="space-y-6 flex flex-col">
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Réseaux</h4>
                        <div className="flex flex-col flex-1 justify-between">
                        <ul className="space-y-4">
                            {socials.map((social) => (
                                <li key={social.name}>
                                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors font-light">
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Link href="/politique-confidentialite" className="text-white/40 pt-8 md:pt-0 hover:text-white transition-colors font-light">
                                    Confidentialité
                                </Link>
</div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-xs font-medium">
                        © {currentYear} ELYES BEN KILANI — TOUS DROITS RÉSERVÉS
                    </p>
                    <p className="text-white/20 text-xs font-medium tracking-widest uppercase">
                        CONSTRUIT AVEC NEXT.JS & FRAMER MOTION
                    </p>
                </div>
            </div>
        </footer>
    )
}