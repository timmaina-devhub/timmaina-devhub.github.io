import Hero from "@/components/Hero";
import CoreExpertise from "@/components/CoreExpertise";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="page-container">
      <Hero />
      <CoreExpertise />
      <FeaturedProjects />
    </main>
  );
}
