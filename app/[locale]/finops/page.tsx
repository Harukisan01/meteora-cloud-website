import { LineChart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function FinOps({ params: { locale: paramLocale } }: { params: { locale: string } }) {
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
                        <LineChart className="w-5 h-5" /> FinOps & Cost Optimization
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Taglia il costo delle bollette Cloud.
                    </h1>
                    <p className="text-xl text-textMuted max-w-2xl leading-relaxed">
                        Pagare 5.000€ al mese di server AWS e non sapere il perché è un problema fin troppo comune. Analizziamo i tuoi costi riga per riga per eliminare gli sprechi invisibili.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Analisi degli Sprechi</h3>
                        <p className="text-textMuted">Individuiamo server sovradimensionati, risorse "orfane" dimenticate accese, indirizzi IP non utilizzati e snapshot inutili che stanno gonfiando la fattura.</p>
                    </div>
                    <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-4">
                        <h3 className="text-2xl font-semibold text-white">Pianificazione Costi</h3>
                        <p className="text-textMuted">Ristrutturiamo l'architettura per sfruttare istanze Spot o Savings Plans, facendoti risparmiare fino al 40% senza sacrificare 1 millisecondo di performance.</p>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 rounded-3xl p-8 text-center space-y-6">
                    <h2 className="text-3xl font-bold text-white">Non buttare soldi dalla finestra</h2>
                    <p className="text-textMuted max-w-xl mx-auto">Richiedi un'analisi senza impegno delle tue ultime fatture Cloud.</p>
                    <Link href={`/${locale}#contatti`}>
                        <Button variant="primary" size="lg" className="mt-4">Richiedi Analisi FinOps</Button>
                    </Link>
                </div>

            </div>
        </main>
    );
}
