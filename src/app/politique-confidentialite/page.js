export default function PolitiqueConfidentialite() {
    return (
        <section className="max-w-4xl mx-auto px-8 py-20">
            
            <h1 className="text-3xl md:text-4xl text-purple-400 font-bold mb-14 ">
                Politique de confidentialité
            </h1>

            <div className="space-y-12">

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        1. Responsable du traitement
                    </h2>
                    <div className="pl-6 space-y-1">
                        <p>Nom : Elyes Ben Kilani</p>
                        <p>Email : elyes.bk@orange.fr</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        2. Données collectées
                    </h2>
                    <div className="pl-6">
                        <ul className="list-disc ml-4 space-y-1">
                            <li>Nom</li>
                            <li>Adresse email</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        3. Finalité de la collecte
                    </h2>
                    <div className="pl-6">
                        <p>
                            Ces données sont collectées uniquement afin de répondre aux
                            demandes envoyées via le formulaire de contact.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        4. Base légale
                    </h2>
                    <div className="pl-6">
                        <p>
                            La base légale du traitement est le consentement de l’utilisateur.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        5. Durée de conservation
                    </h2>
                    <div className="pl-6">
                        <p>
                            Les données sont conservées pendant une durée maximale de 12 mois
                            après le dernier échange, puis supprimées.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        6. Destinataires des données
                    </h2>
                    <div className="pl-6">
                        <p>
                            Les données sont exclusivement destinées à Elyes Ben Kilani et ne
                            sont jamais transmises à des tiers.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        7. Hébergement
                    </h2>
                    <div className="pl-6">
                        <p>
                            Le site est hébergé par Vercel. Le nom de domaine est géré par
                            o2switch.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        8. Droits des utilisateurs
                    </h2>
                    <div className="pl-6 space-y-2">
                        <p>
                            Conformément au RGPD, vous disposez d’un droit d’accès, de
                            rectification, de suppression et d’opposition concernant vos
                            données personnelles.
                        </p>
                        <p>
                            Vous pouvez exercer ces droits en envoyant un email à :
                            <span className="font-medium"> elyes.bk@orange.fr</span>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3 ">
                        9. Sécurité
                    </h2>
                    <div className="pl-6">
                        <p>
                            Des mesures techniques et organisationnelles sont mises en œuvre
                            afin de protéger les données personnelles contre tout accès non
                            autorisé.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
