import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/vysai-logo.png.asset.json";

const NAV = [
  { label: "EXPLORE OUR EDITS", href: "#explore" },
  { label: "ON TREND", href: "#explore" },
  { label: "PERSONAL BRANDING", href: "#explore" },
  { label: "GLIMPSE", href: "#explore" },
  { label: "REELING", href: "#explore" },
  { label: "SAAS VIDEOS", href: "#explore" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex shrink-0 items-center">
          <img
            src={logo.url}
            alt="Vysai Digital Media"
            width={920}
            height={380}
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(i)}
              className="relative py-1 text-[11px] font-semibold tracking-[0.06em] text-ink transition-colors hover:text-primary"
            >
              {item.label}
              {active === i && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[12px] font-bold tracking-[0.03em] text-primary-foreground transition-all duration-300 hover:bg-primary-bright hover:shadow-[var(--shadow-glow)] sm:inline-flex"
          >
            Let's Create Magic <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          >
            {open ? <Menu className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="flex h-[68px] items-center justify-between border-b border-border px-5">
              <img src={logo.url} alt="Vysai Digital Media" className="h-12 w-auto" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-6">
              {NAV.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(i);
                    setOpen(false);
                  }}
                  className="border-b border-border py-4 text-sm font-semibold tracking-[0.06em] text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"
              >
                Let's Create Magic <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
