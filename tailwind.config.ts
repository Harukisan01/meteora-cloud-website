import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F8FAFC", // Slate 50 (soft white)
                card: "#FFFFFF", // Pure white
                primary: "#2563EB", // Corporate Blue
                secondary: "#0F172A", // Deep Slate (almost black but softer)
                textMain: "#1E293B", // Slate 800
                textMuted: "#64748B", // Slate 500
                border: "#E2E8F0", // Slate 200
            },
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
