import v1 from "@/assets/v1.jpg";
import v2 from "@/assets/v2.jpg";
import v3 from "@/assets/v3.jpg";
import v4 from "@/assets/v4.jpg";
import v5 from "@/assets/v5.jpg";
import v6 from "@/assets/v6.jpg";
import v7 from "@/assets/v7.jpg";
import v8 from "@/assets/v8.jpg";
import v9 from "@/assets/v9.jpg";

import vishnu from "@/assets/editor-vishnu.jpg";
import basheer from "@/assets/editor-basheer.jpg";
import sreeram from "@/assets/editor-sreeram.jpg";

export const CATEGORIES = [
  "All",
  "On Trend Videos",
  "Personal Branding Videos",
  "Glimpse Videos",
  "Reeling Videos",
  "SaaS Videos",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type VideoItem = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  duration: string;
  thumbnail: string;
  description: string;
};

export const VIDEOS: VideoItem[] = [
  {
    id: "personal-branding-reel",
    title: "Personal Branding Reel",
    category: "Personal Branding Videos",
    duration: "00:30",
    thumbnail: v1,
    description:
      "A punchy founder reel cut for rhythm — beat-matched transitions, colour grade and kinetic captions.",
  },
  {
    id: "motivational-short",
    title: "Motivational Short",
    category: "On Trend Videos",
    duration: "00:18",
    thumbnail: v2,
    description:
      "Trend-driven short with bold typography animation and sound design built for the first three seconds.",
  },
  {
    id: "podcast-edit",
    title: "Podcast Edit",
    category: "Personal Branding Videos",
    duration: "01:24",
    thumbnail: v3,
    description:
      "Multi-cam podcast edit with clean audio mastering, B-roll inserts and highlight-ready clipping.",
  },
  {
    id: "cinematic-travel-edit",
    title: "Cinematic Travel Edit",
    category: "Glimpse Videos",
    duration: "00:32",
    thumbnail: v4,
    description:
      "Golden-hour travel glimpse with speed ramps, seamless masks and a warm filmic grade.",
  },
  {
    id: "tech-explainer",
    title: "Tech Explainer",
    category: "SaaS Videos",
    duration: "00:26",
    thumbnail: v5,
    description:
      "Product explainer combining motion graphics, UI animation and a tight narrative structure.",
  },
  {
    id: "product-promo",
    title: "Product Promo",
    category: "SaaS Videos",
    duration: "00:20",
    thumbnail: v6,
    description:
      "High-contrast product promo with light-streak compositing and precision-timed reveals.",
  },
  {
    id: "sports-highlight",
    title: "Sports Highlight",
    category: "Reeling Videos",
    duration: "00:36",
    thumbnail: v7,
    description:
      "Stadium highlight reel cut to impact — slow motion, whip transitions and stadium sound layering.",
  },
  {
    id: "wedding-teaser",
    title: "Wedding Teaser",
    category: "Glimpse Videos",
    duration: "00:28",
    thumbnail: v8,
    description:
      "Emotional wedding teaser weaving candid moments into a one-minute cinematic story.",
  },
  {
    id: "inspiring-edit",
    title: "Inspiring Edit",
    category: "On Trend Videos",
    duration: "00:22",
    thumbnail: v9,
    description:
      "Hand-lettered motion typography over moody landscape footage, graded for contrast and mood.",
  },
];

export type Editor = {
  name: string;
  role: string;
  description: string;
  portrait: string;
};

export const EDITORS: Editor[] = [
  {
    name: "VISHNU",
    role: "Creative Video Editor",
    description: "Passionate about storytelling through visuals and motion.",
    portrait: vishnu,
  },
  {
    name: "BASHEER",
    role: "Lead Video Editor",
    description: "Crafting impactful edits that connect and inspire.",
    portrait: basheer,
  },
  {
    name: "SREERAM",
    role: "Motion & FX Editor",
    description: "Turning ideas into stunning visual experiences.",
    portrait: sreeram,
  },
];
