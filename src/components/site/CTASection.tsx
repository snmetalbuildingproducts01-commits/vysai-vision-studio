import { motion } from "framer-motion";
import { ArrowRight, Clapperboard } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="bg-background pb-16 sm:pb-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-[image:var(--gradient-cta)] px-6 py-9 sm:px-10 sm:py-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

          <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Clapperboard className="h-9 w-9 shrink-0 text-white/85" />
              <div className="font-display text-xl font-extrabold uppercase leading-[1.15] tracking-[-0.01em] text-white sm:text-2xl">
                Have a story
                <br />
                <span className="text-[oklch(0.82_0.13_300)]">To tell?</span>
              </div>
              <span className="hidden h-14 w-px bg-white/30 sm:block" />
              <div className="font-display text-xl font-extrabold uppercase leading-[1.15] tracking-[-0.01em] text-white sm:text-2xl">
                Let's edit it
                <br />
                <span className="text-[oklch(0.82_0.13_300)]">Into impact.</span>
              </div>
            </div>

            <motion.a
              href="mailto:hello@vysaidigital.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[oklch(0.62_0.25_296)] px-7 py-3.5 text-[12px] font-bold tracking-[0.08em] text-white ring-1 ring-white/25 transition-shadow duration-300 hover:shadow-[0_10px_34px_oklch(0.2_0.1_290/0.5)]"
            >
              GET IN TOUCH <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
