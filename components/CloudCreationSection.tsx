"use client";

import { Shield, CheckCircle2, Code2, Cloud, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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

export function CloudCreationSection() {
  const tC = useTranslations("Creation");
  return (
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12"
    >
      {/* Header */}
      <motion.div variants={fadeUpVariant} className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-semibold text-secondary bg-blue-50/50">
          <Cloud className="w-4 h-4 text-primary" /> {tC("badge")}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight">
          {tC("title")}
        </h2>
        <p className="text-xl text-textMuted max-w-2xl mx-auto leading-relaxed">
          {tC("desc")}
        </p>
      </motion.div>

      {/* Grid: 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            icon: <Server className="w-8 h-8 text-[#FF9900]" />,
            title: tC("p1_title"),
            desc: tC("p1_desc")
          },
          {
            icon: <Cloud className="w-8 h-8 text-[#0089D6]" />,
            title: tC("p2_title"),
            desc: tC("p2_desc")
          },
          {
            icon: <Code2 className="w-8 h-8 text-[#844FBA]" />,
            title: tC("p3_title"),
            desc: tC("p3_desc")
          }
        ].map((feature, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeUpVariant}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-card rounded-3xl border border-border p-8 shadow-sm hover:shadow-xl transition-all flex flex-col"
          >
            <motion.div 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center mb-6 shadow-sm border border-border/50 transition-transform"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-secondary mb-3">{feature.title}</h3>
            <p className="text-textMuted leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Tech Table */}
      <motion.div variants={fadeUpVariant} className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
        <div className="p-10 border-b border-border bg-background/50">
            <h3 className="text-3xl font-bold text-secondary tracking-tight">{tC("stack_title")}</h3>
            <p className="text-lg text-textMuted mt-2">{tC("stack_desc")}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-card border-b border-border text-textMuted">
              <tr>
                <th className="px-8 py-5 font-semibold text-sm uppercase tracking-wider">{tC("col_sol")}</th>
                <th className="px-8 py-5 font-semibold text-sm uppercase tracking-wider">{tC("col_tech")}</th>
                <th className="px-8 py-5 font-semibold text-sm uppercase tracking-wider">{tC("col_vantaggio")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { s: "High Availability", t: "Multi-AZ, Load Balancing, Auto-scaling", v: tC("c1_v") },
                { s: "Containerization", t: "EKS, AKS, GKE, Docker", v: tC("c2_v") },
                { s: "Serverless Setup", t: "AWS Lambda, Azure Functions, Cloud Run", v: tC("c3_v") },
                { s: "IaC Governance", t: "Terraform Sentinel, OPA", v: tC("c4_v") },
              ].map((row, i) => (
                <motion.tr 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="hover:bg-blue-50/30 transition-colors duration-200"
                >
                  <td className="px-8 py-6 whitespace-nowrap text-secondary font-bold flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> {row.s}
                  </td>
                  <td className="px-8 py-6 text-secondary text-sm">
                    <span className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1.5 rounded-lg font-medium">
                      {row.t}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-textMuted">{row.v}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

    </motion.section>
  );
}
