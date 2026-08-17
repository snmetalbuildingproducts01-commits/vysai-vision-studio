import { Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/vysai-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <img
          src={logo.url}
          alt="Vysai Digital Media"
          width={920}
          height={380}
          loading="lazy"
          className="h-9 w-auto"
        />

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-ink-soft lg:justify-center">
          <span className="hidden h-4 w-px bg-border lg:block" />
          <a href="#explore" className="transition-colors hover:text-primary">
            Video Editing Portfolio
          </a>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <a href="#editors" className="transition-colors hover:text-primary">
            Creative Visuals
          </a>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span>Vysai Digital Media</span>
        </nav>

        <div className="flex items-center gap-4">
          {[Instagram, Youtube, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#contact"
              aria-label="Vysai Digital Media social profile"
              className="grid h-9 w-9 place-items-center rounded-lg text-ink transition-colors hover:bg-secondary hover:text-primary"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
