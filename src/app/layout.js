import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export const metadata = {
  title: "Elyes Ben Kilani",
  description: "Bienvenue sur mon portfolio.",
  icons: {
    icon: "/assets/favicon.svg",
  },
}

const encres = [
  { name: "Accueil", ref: "/#accueil" },
  { name: "Projets", ref: "/#projects" },
  { name: "A propos", ref: "/#about" },
  { name: "Contact", ref: "/#contact" },
]

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="relative text-[#FAF8F5]">

        {/* BACKGROUND GLOBAL */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0B021D] via-[#12062E] to-[#0B021D]">
          
          {/* Glow principal */}
          <div className="
            absolute top-[15%] left-1/2 -translate-x-1/2
            w-[600px] h-[600px]
            bg-purple-700/20
            blur-[140px]
            rounded-full
          " />

          {/* Glow secondaire */}
          <div className="
            absolute bottom-[10%] left-[20%]
            w-[400px] h-[400px]
            bg-pink-600/20
            blur-[140px]
            rounded-full
          " />
        </div>

        {/* NAVBAR */}
        <Navbar encres={encres} />

        {/* CONTENU */}
        <main>
          {children}
        </main>

        <Footer/>

      </body>
    </html>
  )
}
