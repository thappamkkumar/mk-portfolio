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
    <div className="space-y-8">
      {/* Intro + Image */}

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <IntroContent
          description={aboutInfo.description}
        />

        <ProfileImage
          image={aboutInfo.image}
          name={aboutInfo.name}
        />
      </div>

      {/* About Info + Code */}

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <AboutInfoCard
          aboutInfo={aboutInfo}
          className="order-1 lg:order-2"
        />

        <CodeSnippetCard
          className="order-2 lg:order-1"
        />
      </div>

      <StatsGrid stats={stats} />
    </div>
  );
}