import { contact } from "@/data/contact";

import ContactLinkCard from "./contact-link-card";

export default function ContactLinks() {
  return (
    <section>
      <div className="mb-6">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/40
          "
        >
          Quick Actions
        </p>

        <h2
          className="
            mt-2
            text-2xl
            font-semibold
          "
        >
          Connect With Me
        </h2>
      </div>

      <div
        className="
          grid
          gap-4
          md:grid-cols-2
        "
      >
        {contact.resumeUrl && (
          <ContactLinkCard
            title="Resume"
            description="Download my latest resume and experience."
            href={contact.resumeUrl}
          />
        )}

        {contact.linkedinUrl && (
          <ContactLinkCard
            title="LinkedIn"
            description="View my professional profile and experience."
            href={contact.linkedinUrl}
          />
        )}

        {contact.githubUrl && (
          <ContactLinkCard
            title="GitHub"
            description="Explore projects, experiments and source code."
            href={contact.githubUrl}
          />
        )}

        <ContactLinkCard
          title="Email Me"
          description="Let's discuss opportunities and collaborations."
          href={`mailto:${contact.email}`}
        />
      </div>
    </section>
  );
}