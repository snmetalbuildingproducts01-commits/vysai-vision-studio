import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { CATEGORIES, VIDEOS, type Category, type VideoItem } from "@/data/portfolio";

function VideoCard({ video, onOpen }: { video: VideoItem; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block w-full overflow-hidden rounded-2xl text-left shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[oklch(0.2_0.03_290)]">
        <img
          src={video.thumbnail}
          alt={video.title}
          width={960}
          height={540}
          loading="lazy"
          className="h-full w-full object-cover brightness-[0.86] transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.1_0.02_290/0.85)_0%,oklch(0.1_0.02_290/0.15)_45%,transparent_75%)]" />

        <span className="absolute right-3 top-3 rounded-md bg-black/55 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {video.duration}
        </span>

        <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
          <Play className="ml-0.5 h-5 w-5 fill-current" />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-[15px] font-bold leading-tight text-white">{video.title}</h3>
          <span className="mt-2 inline-block rounded-md bg-primary px-2.5 py-1 text-[10px] font-semibold tracking-[0.02em] text-primary-foreground">
            {video.category}
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-card shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/80"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-video w-full bg-black">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover opacity-70"
          />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        </div>

        <div className="p-6">
          <span className="inline-block rounded-md bg-secondary px-2.5 py-1 text-[10px] font-semibold text-primary">
            {video.category}
          </span>
          <h3 className="mt-3 font-display text-xl font-extrabold tracking-[-0.01em] text-ink">
            {video.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{video.description}</p>
          <p className="mt-3 text-xs font-semibold text-ink-soft">
            Duration — {video.duration}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [category, setCategory] = useState<Category>("All");
  const [selected, setSelected] = useState<VideoItem | null>(null);

  const filtered = useMemo(
    () => (category === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === category)),
    [category],
  );

  return (
    <section id="explore" className="bg-background pb-16 pt-4 sm:pb-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-8 rounded-full bg-primary" />
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary">
              OUR VIDEO WORK
            </p>
            <span className="h-[2px] w-8 rounded-full bg-primary" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.75rem]">
            EXPLORE OUR <span className="text-primary">EDITS</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-14 rounded-full bg-primary/60" />
            <Play className="h-4 w-4 fill-primary text-primary" />
            <span className="h-[2px] w-14 rounded-full bg-primary/60" />
          </div>
        </div>

        <div className="no-scrollbar mt-9 flex gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {CATEGORIES.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`relative shrink-0 rounded-full px-5 py-2 text-[12px] font-semibold transition-colors duration-300 ${
                  active
                    ? "text-primary-foreground"
                    : "border border-border bg-card text-ink hover:border-primary/40 hover:text-primary"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((v) => (
              <VideoCard key={v.id} video={v} onOpen={() => setSelected(v)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <VideoModal video={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
