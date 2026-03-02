import { Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function SecurityAudit({ params: { locale: paramLocale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(paramLocale);
    const locale = useLocale();

    return (
        <main className="min-h-screen flex flex-col items-center pt-32 pb-24 px-4 md:px-8">
            <div className="w-full max-w-4xl mx-auto space-y-12">

                <Link href={`/${locale}`} className="text-primary hover:underline text-sm flex items-center gap-2">
                    &larr; Torna alla Home
                </Link>

                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                        <Shield className="w-5 h-5" /> Security Audit & Compliance
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Trova le vulnerabilità <br />prima degli hacker.
                    </h1>
                    <p className="text-xl text-textMuted max-w-2xl leading-relaxed">
                        Le architetture Cloud moderne offrono strumenti di sicurezza potentissimi, ma il 90% delle violazioni di dati avviene a causa di una configurazione errata da parte del cliente (misconfiguration).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Vulnerability Assessment</h3>
                        <p className="text-textMuted">Analizziamo la tua infrastruttura alla ricerca di porte aperte, ruoli IAM con permessi eccessivi e database non criptati. Forniamo un report dettagliato con le criticità ordinate per rischio.</p>
                    </div>
                    <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Compliance GDPR & ISO</h3>
                        <p className="text-textMuted">Garantiamo che i dati dei tuoi clienti rimangano nei confini europei, siano crittografati a riposo (KMS) e in transito, preparandoti per le verifiche di conformità aziendale.</p>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 rounded-3xl p-8 text-center space-y-6">
                    <h2 className="text-3xl font-bold text-white">Metti in sicurezza i tuoi dati</h2>
                    <p className="text-textMuted max-w-xl mx-auto">Prenota una consulenza tecnica per scoprire quanto è sicura la tua attuale infrastruttura e come chiudere le falle.</p>
                    <Link href={`/${locale}#contatti`}>
                        <Button variant="primary" size="lg" className="mt-4">Richiedi un Audit</Button>
                    </Link>
                </div>

            </div>
        </main>
    );
}
