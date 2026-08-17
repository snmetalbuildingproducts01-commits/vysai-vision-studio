import { motion } from "framer-motion";
import { Play } from "lucide-react";
import hero from "@/assets/hero-studio.jpg";
import logo from "@/assets/vysai-logo.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={hero}
        alt="Video editor working at a multi-monitor editing suite"
        width={1920}
        height={760}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.14_0.06_290/0.94)_0%,oklch(0.14_0.06_290/0.78)_42%,oklch(0.12_0.05_290/0.42)_100%)]" />

      <div className="relative mx-auto flex min-h-[420px] max-w-[1240px] flex-col justify-center px-5 py-16 sm:min-h-[480px] sm:px-8 lg:min-h-[560px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <img
            src={logo.url}
            alt="Vysai Digital Media"
            width={920}
            height={380}
            className="mb-6 h-20 w-auto sm:h-24"
          />
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.4rem]">
            Explore Our{" "}
            <span className="text-[oklch(0.66_0.24_296)]">Edits</span>
          </h1>
          <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
            Cinematic. Engaging. Unforgettable.
            <br />A showcase of our video editing work.
          </p>

          <motion.a
            href="#explore"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/25 bg-[image:var(--gradient-cta)] py-2 pl-2 pr-7 text-[12px] font-bold tracking-[0.08em] text-white shadow-[var(--shadow-glow)] transition-shadow duration-300 hover:shadow-[0_10px_40px_oklch(0.53_0.28_296/0.6)]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur">
              <Play className="h-4 w-4 fill-current" />
            </span>
            START WATCHING
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
