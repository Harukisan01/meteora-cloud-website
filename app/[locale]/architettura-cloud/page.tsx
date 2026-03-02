import { Server } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function ArchitetturaCloud() {
    const locale = useLocale();

    return (
        <main className="min-h-screen flex flex-col items-center pt-32 pb-24 px-4 md:px-8">
            <div className="w-full max-w-4xl mx-auto space-y-12">

                <Link href={`/${locale}`} className="text-primary hover:underline text-sm flex items-center gap-2">
                    &larr; Torna alla Home
                </Link>

                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                        <Server className="w-5 h-5" /> Architettura Cloud: AWS & Azure
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Infrastrutture Enterprise <br />per PMI e Startup.
                    </h1>
                    <p className="text-xl text-textMuted max-w-2xl leading-relaxed">
                        Niente più server fisici obsoleti nei sottoscala o hosting condivisi lenti. Portiamo i tuoi applicativi, gestionali e siti web su architetture Cloud distribuite che scalano automaticamente in base al traffico.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 pt-8">
                    <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 space-y-6 relative overflow-hidden">
                        <div className="relative z-10 w-full md:w-2/3 space-y-4">
                            <h3 className="text-3xl font-semibold text-white">Amazon Web Services (AWS)</h3>
                            <p className="text-textMuted">Progettiamo la tua infrastruttura sulle stesse tecnologie usate da Netflix e Amazon. Utilizziamo architetture multi-AZ (Availability Zones) per garantire lo 0% di downtime: se un data center va giù, il tuo sito continua a funzionare dal data center gemellino a 10 km di distanza.</p>
                        </div>
                    </div>

                    <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 space-y-6 relative overflow-hidden">
                        <div className="relative z-10 w-full md:w-2/3 space-y-4">
                            <h3 className="text-3xl font-semibold text-white">Microsoft Azure</h3>
                            <p className="text-textMuted">Lavori in ecosistema Microsoft? Progettiamo migrazioni fluide di Active Directory verso Entra ID, spostiamo i tuoi SQL Server su Database Gestiti e facciamo scalare i tuoi applicativi .NET su Azure App Service. Perfetta integrazione B2B.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-card to-background border border-primary/20 rounded-2xl p-8 md:p-12 space-y-6 relative overflow-hidden">
                    <div className="relative z-10 w-full space-y-4">
                        <h3 className="text-3xl font-semibold text-white flex items-center gap-3">
                            <Server className="text-primary w-8 h-8" /> Migrazioni Cloud-to-Cloud
                        </h3>
                        <p className="text-textMuted text-lg leading-relaxed">Sei già sul Cloud ma i costi sono fuori controllo, le performance non rispecchiano le aspettative, o il tuo fornitore ha cambiato le regole del gioco? Progettiamo e realizziamo strategie di migrazione <strong>Cloud-to-Cloud</strong> (es. da AWS ad Azure o viceversa). Ci occupiamo di riscrivere l'architettura per adattarla al nuovo provider, evitando il "lift and shift" passivo e garantendo una transizione a zero downtime.</p>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 rounded-3xl p-8 text-center space-y-6">
                    <h2 className="text-3xl font-bold text-white">Vuoi modernizzare la tua architettura IT?</h2>
                    <p className="text-textMuted max-w-xl mx-auto">Parlaci del tuo attuale setup e noi disegneremo l'architettura Cloud perfetta per sostenere la tua crescita.</p>
                    <Link href={`/${locale}#contatti`}>
                        <Button variant="primary" size="lg" className="mt-4">Parla con un Architetto</Button>
                    </Link>
                </div>

            </div>
        </main>
    );
}
