import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";
import { EDITORS, type Editor } from "@/data/portfolio";

function EditorCard({ editor, index }: { editor: Editor; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-[22px] border border-border bg-card px-7 pb-8 pt-10 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="mx-auto h-[164px] w-[164px] overflow-hidden rounded-full bg-[image:var(--gradient-cta)] p-[3px]">
        <div className="h-full w-full overflow-hidden rounded-full bg-[oklch(0.62_0.23_296)]">
          <img
            src={editor.portrait}
            alt={`${editor.name}, ${editor.role}`}
            width={816}
            height={816}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <h3 className="mt-7 font-display text-lg font-bold tracking-[0.04em] text-primary">
        {editor.name}
      </h3>
      <p className="mt-2 text-[13px] font-semibold text-ink">{editor.role}</p>
      <p className="mx-auto mt-3 max-w-[15rem] text-[13px] leading-6 text-ink-soft">
        {editor.description}
      </p>

      <div className="mt-6 flex items-center justify-center gap-4">
        {[Linkedin, Instagram, Youtube].map((Icon, i) => (
          <a
            key={i}
            href="#contact"
            aria-label={`${editor.name} social profile`}
            className="grid h-8 w-8 place-items-center rounded-lg text-primary transition-colors hover:bg-secondary"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </motion.article>
  );
}

export function EditorsSection() {
  return (
    <section id="editors" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 rounded-full bg-primary" />
          <h2 className="font-display text-sm font-extrabold tracking-[0.16em] text-primary sm:text-base">
            OUR EDITORS
          </h2>
          <span className="h-[2px] w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EDITORS.map((e, i) => (
            <EditorCard key={e.name} editor={e} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.a
            href="#explore"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-[12px] font-bold tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary-bright"
          >
            VIEW THEIR WORK <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
