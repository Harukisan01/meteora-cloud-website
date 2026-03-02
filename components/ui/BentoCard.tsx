import Link from "next/link";
import { useLocale } from "next-intl";

export function BentoCard({
    className,
    title,
    icon,
    children,
    href,
}: {
    className?: string;
    title?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    href?: string;
}) {
    const locale = useLocale();
    const CardContent = (
        <div
            className={`group relative overflow-hidden rounded-2xl bg-card p-6 md:p-8 shadow-lg border border-white/5 hover:border-primary/30 hover:bg-white/[0.02] transition-all duration-300 ${className || ""} ${href ? "cursor-pointer" : ""}`}
        >
            <div className="flex flex-col h-full z-10 relative">
                <div className="flex justify-between items-start mb-4">
                    {icon && <div className="text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>}
                    {href && (
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors text-white/50">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    )}
                </div>
                {title && (
                    <h3 className="text-2xl font-semibold text-textMain mb-2 group-hover:text-primary transition-colors">{title}</h3>
                )}
                <div className="text-textMuted text-sm md:text-base flex-grow">
                    {children}
                </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-3xl pointer-events-none transition-colors duration-500" />
        </div>
    );

    if (href) {
        return <Link href={`/${locale}${href}`} className="block h-full md:col-span-auto" style={{ gridColumn: className?.includes('col-span-2') ? 'span 2 / span 2' : 'auto' }}>{CardContent}</Link>;
    }

    return CardContent;
}
