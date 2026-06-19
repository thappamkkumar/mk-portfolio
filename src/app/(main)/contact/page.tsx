import ContactHeader from "@/components/contact/contact-header";
import ContactInfo from "@/components/contact/contact-info";
import ContactLinks from "@/components/contact/contact-links";

export default function ContactPage() {
  return (
    < >
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
    </>
  );
}