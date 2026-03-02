"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Shield, Server, LineChart, Code2, Cloud } from "lucide-react";
import { CloudCreationSection } from "@/components/CloudCreationSection";
import { motion } from "framer-motion";

const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Home() {
    const t = useTranslations("Hero");
    const tS = useTranslations("Services");
    const tA = useTranslations("About");

    return (
        <main className="min-h-screen flex flex-col items-center bg-background overflow-hidden">
            {/* SECTION 1: HERO (Soft Corporate - Original) */}
            <motion.section 
                initial="hidden" 
                animate="visible" 
                variants={staggerContainer}
                className="w-full max-w-6xl mx-auto pt-32 pb-24 px-6 md:px-12 text-center flex flex-col items-center"
            >
                <motion.div variants={fadeUpVariant} className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50/50 border border-blue-100 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
                    Migrazione in Cloud
                </motion.div>
                
                <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-secondary leading-tight max-w-5xl">
                    {t("title")}
                </motion.h1>
                
                <motion.p variants={fadeUpVariant} className="mt-8 text-xl md:text-2xl text-textMuted max-w-3xl font-medium leading-relaxed">
                    {t("subtitle")}
                </motion.p>
                
                <motion.div variants={fadeUpVariant} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                        <Button size="lg" className="w-full bg-primary text-white hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl text-lg font-bold px-10 py-7 transition-colors duration-300">
                            {t("cta")}
                        </Button>
                    </motion.div>
                </motion.div>
                
                <motion.div variants={fadeUpVariant} className="mt-16 pt-10 border-t border-border/50 flex flex-col items-center gap-6 w-full max-w-2xl">
                    <p className="text-sm font-semibold text-textMuted uppercase tracking-widest text-center">Infrastrutture costruite su</p>
                    <div className="flex items-center justify-center gap-10 opacity-70 flex-wrap">
                        <motion.div whileHover={{ y: -3, color: "#0089D6" }} className="flex items-center gap-2 text-secondary transition-colors cursor-pointer"><Server className="w-6 h-6" /> <span className="font-bold text-lg">AWS</span></motion.div>
                        <motion.div whileHover={{ y: -3, color: "#0089D6" }} className="flex items-center gap-2 text-secondary transition-colors cursor-pointer"><Cloud className="w-6 h-6" /> <span className="font-bold text-lg">Azure</span></motion.div>
                        <motion.div whileHover={{ y: -3, color: "#844FBA" }} className="flex items-center gap-2 text-secondary transition-colors cursor-pointer"><Code2 className="w-6 h-6" /> <span className="font-bold text-lg">Terraform</span></motion.div>
                    </div>
                </motion.div>
            </motion.section>

            {/* SECTION 2: SERVICES GRID (Soft Modern Grid) */}
            <motion.section 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12"
            >
                 <motion.div variants={fadeUpVariant} className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight">{tS("title")}</h2>
                    <p className="text-xl text-textMuted max-w-2xl mx-auto">{tS("subtitle")}</p>
                 </motion.div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: tS("arch"), desc: tS("arch_desc"), icon: <Server className="w-8 h-8 text-primary" /> },
                        { title: tS("sec"), desc: tS("sec_desc"), icon: <Shield className="w-8 h-8 text-primary" /> },
                        { title: tS("fin"), desc: tS("fin_desc"), icon: <LineChart className="w-8 h-8 text-primary" /> },
                        { title: tS("dev"), desc: tS("dev_desc"), icon: <Code2 className="w-8 h-8 text-primary" /> }
                    ].map((service, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={fadeUpVariant}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col gap-6"
                        >
                            <motion.div 
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center transition-transform"
                            >
                               {service.icon}
                            </motion.div>
                            <div>
                                <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                                <p className="text-lg text-textMuted leading-relaxed">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                 </div>
            </motion.section>

            <CloudCreationSection />

            {/* SECTION 3.5: ABOUT ME & CERTIFICATIONS */}
            <motion.section 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                className="w-full max-w-6xl mx-auto py-24 px-6 md:px-12"
            >
                <div className="bg-card rounded-3xl border border-border p-10 lg:p-16 flex flex-col md:flex-row gap-12 md:items-center shadow-lg hover:shadow-xl transition-shadow duration-500">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-bold text-secondary bg-blue-50/50">
                            <Shield className="w-4 h-4 text-primary" /> {tA("badge")}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight">{tA("title")}</h2>
                        <p className="text-lg text-textMuted leading-relaxed max-w-2xl">
                            {tA("desc")}
                        </p>
                            <motion.a href="https://github.com/meteora-cloud" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="bg-secondary text-white rounded-xl border border-secondary py-2 px-4 text-sm font-semibold flex items-center gap-2 shadow-md hover:bg-secondary/90 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.48-1.54 6.48-7.14a5.46 5.46 0 0 0-1.53-3.8 5.07 5.07 0 0 0-.16-3.72s-1.21-.38-3.9 1.44a13.24 13.24 0 0 0-7 0c-2.69-1.82-3.9-1.44-3.9-1.44a5.07 5.07 0 0 0-.16 3.72 A5.46 5.46 0 0 0 2 8.82c0 5.6 3.34 6.79 6.48 7.14a4.8 4.8 0 0 0-1 3.02v4"/><path d="M9 20c-4.1 1.2-5.1-2-5.1-2"/></svg>
                                <span>GitHub Profile</span>
                            </motion.a>
                            <motion.div whileHover={{ scale: 1.05 }} className="bg-background rounded-xl border border-border py-2 px-4 text-sm font-semibold text-secondary flex items-center gap-2 cursor-default">
                                <span className="text-blue-600 font-bold">Microsoft Certified</span> <span className="text-textMuted">Azure Administrator Associate</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="bg-background rounded-xl border border-border py-2 px-4 text-sm font-semibold text-secondary flex items-center gap-2 cursor-default">
                                <span className="text-blue-600 font-bold">Microsoft Certified</span> <span className="text-textMuted">Azure Solutions Architect Expert</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="bg-background rounded-xl border border-border py-2 px-4 text-sm font-semibold text-secondary flex items-center gap-2 cursor-default">
                                <span className="text-emerald-500 font-bold">HashiCorp</span> <span className="text-textMuted">Terraform Associate</span>
                            </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* SECTION 4: CONTACT FORM */}
            <motion.section 
                id="contatti" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                className="w-full max-w-3xl mx-auto py-24 px-6 md:px-12"
            >
                <div className="bg-card rounded-3xl border border-border p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                    <div className="text-center space-y-4 mb-10">
                        <h2 className="text-4xl font-bold text-secondary tracking-tight">Pronto a scalare il tuo business?</h2>
                        <p className="text-lg text-textMuted">Compila il form per richiedere una call conoscitiva di 30 minuti con i nostri Cloud Architects.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Il backend Serverless sarà collegato a questo form!"); }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary">Nome completo</label>
                                <input required type="text" className="w-full bg-background rounded-xl border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-secondary" placeholder="" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary">Email Aziendale</label>
                                <input required type="email" className="w-full bg-background rounded-xl border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-secondary" placeholder="" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-secondary">Ruolo (CEO, CTO, IT Manager...)</label>
                            <input required type="text" className="w-full bg-background rounded-xl border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-secondary" placeholder="ES: CTO" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-secondary">Di cosa hai bisogno?</label>
                            <textarea required rows={5} className="w-full bg-background rounded-xl border border-border px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-secondary resize-none" placeholder="Descrivi brevemente il tuo progetto o problema attuale..." />
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4">
                            <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-xl text-lg font-bold px-8 py-7 transition-colors duration-300">
                                Invia Richiesta
                            </Button>
                        </motion.div>
                        <p className="text-sm text-textMuted text-center pt-2">
                            Inviando il modulo accetti la nostra Privacy Policy in conformità con il GDPR.
                        </p>
                    </form>
                </div>
            </motion.section>
        </main>
    );
}
