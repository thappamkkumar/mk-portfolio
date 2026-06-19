import type {
  AboutInfo,
  Stat,
} from "@/types/about";

import IntroContent from "./intro-content";
import ProfileImage from "./profile-image";
import AboutInfoCard from "./about-info";
import CodeSnippetCard from "./code-snippet-card";
import StatsGrid from "./stats-grid";

interface AboutSectionProps {
  aboutInfo: AboutInfo;
  stats: Stat[];
}

export default function AboutSection({
  aboutInfo,
  stats,
}: AboutSectionProps) {
  return (
    <section className="space-y-12 md:space-y-16">
      {/* Hero */}

      <div
        className="
          grid
          gap-10
          lg:grid-cols-[1.2fr_0.8fr]
          lg:items-center
        "
      >
        <IntroContent />

        <ProfileImage
          image={aboutInfo.image}
          name={aboutInfo.name}
        />
      </div>

      {/* Stats */}

      <StatsGrid stats={stats} />

      {/* Details */}

      <div
        className="
          grid
          gap-8
          lg:grid-cols-[420px_minmax(0,1fr)]
          lg:items-start
        "
      >
        <AboutInfoCard
          aboutInfo={aboutInfo}
        />

        <CodeSnippetCard />
      </div>
    </section>
  );
}