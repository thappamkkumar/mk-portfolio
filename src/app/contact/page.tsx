import ContactHeader from "@/components/contact/contact-header";
import ContactInfo from "@/components/contact/contact-info";
import ContactLinks from "@/components/contact/contact-links";

export default function ContactPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden mx-auto max-w-7xl px-4 py-10 md:px-6"
    >
      <ContactHeader />

      <div
        className="
          grid
          gap-8
          lg:grid-cols-[420px_1fr]
        "
      >
        <ContactInfo />

        <ContactLinks />
      </div>
    </div>
  );
}