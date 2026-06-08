import { contact } from "@/data/contact";

import ContactLinkCard from "./contact-link-card";

export default function ContactLinks() {
  return (
    <div className="grid gap-4">
      <ContactLinkCard
        title="Resume"
        description="View or download my resume."
        href={contact.resumeUrl}
      />

      <ContactLinkCard
        title="LinkedIn"
        description="Connect with me professionally."
        href={contact.linkedinUrl}
      />

      <ContactLinkCard
        title="GitHub"
        description="Explore my projects and code."
        href={contact.githubUrl}
      />

      <ContactLinkCard
        title="Email Me"
        description="Send me an email directly."
        href={`mailto:${contact.email}`}
      />
    </div>
  );
}