import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Elyes Ben Kilani — Dev Web & Cyber",
  description: "Développeur web passionné par l'innovation et la cybersécurité.",
  icons: {
    icon: "/assets/favicon.svg",
  },
}

const encres = [
  { name: "Accueil", ref: "/#accueil" },
  { name: "Projets", ref: "/#projects" },
  { name: "Parcours", ref: "/#about" },
  { name: "Contact", ref: "/#contact" },
]

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased selection:bg-purple-500/30 selection:text-white">
        {/* Global Grainy Background Effect */}
        <div className="fixed inset-0 -z-20 bg-[#05010d]" />

        {/* Subtle Global Glows */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />
        </div>

        <Navbar encres={encres} />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
