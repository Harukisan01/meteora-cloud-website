"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        
        // Nascondi l'header se si scorre verso il basso (dopo 150px), mostralo se si scorre verso l'alto
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        
        // Cambia lo stile dell'header e la dimensione del logo se si è scrollato
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.header 
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center ${
                scrolled 
                    ? 'py-3 px-4 md:px-6 bg-background/90 backdrop-blur-md shadow-sm border-b border-border' 
                    : 'py-5 px-4 md:px-6 bg-transparent'
            }`}
        >
            <div className="flex items-center">
                <motion.div
                    animate={{ 
                        scale: scrolled ? 0.85 : 1,
                        opacity: 1
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="origin-left"
                >
                    <img 
                        src="/logo.png" 
                        alt="Meteora Logo" 
                        className="h-8 md:h-10 w-auto drop-shadow-sm" 
                    />
                </motion.div>
            </div>
            <LanguageSwitcher />
        </motion.header>
    );
}
