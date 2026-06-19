import ContactHeader from "@/components/contact/contact-header";
import ContactInfo from "@/components/contact/contact-info";
import ContactLinks from "@/components/contact/contact-links";
import ContactCTA from "@/components/contact/contact-cta";

export default function ContactPage() {
  return (
    <>
      <ContactHeader />

      <div className="space-y-8">
        <ContactInfo />

        <ContactLinks />

        <ContactCTA />
      </div>
    </>
  );
}