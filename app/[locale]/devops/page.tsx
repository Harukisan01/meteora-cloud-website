import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function DevOps({ params: { locale: paramLocale } }: { params: { locale: string } }) {
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
                        <Code2 className="w-5 h-5" /> DevOps & Serverless
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Rilasci software in minuti, non mesi.
                    </h1>
                    <p className="text-xl text-textMuted max-w-2xl leading-relaxed">
                        Basta con i rilasci notturni che bloccano l'azienda. Automatizziamo tutto il ciclo di vita del codice dalla tastiera dello sviluppatore fino alla produzione.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-4 relative overflow-hidden">
                        <h3 className="text-2xl font-semibold text-white relative z-10">CI/CD Pipeline</h3>
                        <p className="text-textMuted relative z-10">Creiamo pipeline automatiche (es. GitHub Actions o GitLab CI) che testano, validano e mettono in produzione il tuo codice in pochi minuti a ogni commit.</p>
                    </div>
                    <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-4 relative overflow-hidden">
                        <h3 className="text-2xl font-semibold text-white relative z-10">Serverless Architecture</h3>
                        <p className="text-textMuted relative z-10">Riscriviamo i tuoi componenti in Lambda function o Container Fargate che si spengono a zero quando non usati e scalano all'infinito durante i picchi di traffico.</p>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 rounded-3xl p-8 text-center space-y-6">
                    <h2 className="text-3xl font-bold text-white">Accelera il tuo Team di sviluppo</h2>
                    <p className="text-textMuted max-w-xl mx-auto">Raccontaci i colli di bottiglia attuali e progettiamo un flusso DevOps su misura.</p>
                    <Link href={`/${locale}#contatti`}>
                        <Button variant="primary" size="lg" className="mt-4">Inizia l'Automazione</Button>
                    </Link>
                </div>

            </div>
        </main>
    );
}
