import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { EditorsSection } from "@/components/site/EditorsSection";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";

const title = "Vysai Digital Media — Video Editing Portfolio";
const description =
  "Cinematic video editing, motion graphics, reels and brand films by Vysai Digital Media. Explore our edits.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EditorsSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
