import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";

import { contact } from "@/data/contact";

import ContactRow from "./contact-row";

export default function ContactInfo() {
  return (
    <div
      className="
        grid
        gap-6
        lg:grid-cols-2
      "
    >
      {/* Details */}
      <section
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
        "
      >
        <div className="border-b border-white/10 p-5">
          <h2 className="font-medium">
            Contact Details
          </h2>
        </div>

        <ContactRow
          icon={<Mail size={18} />}
          label="Email"
          value={contact.email}
        />

        <ContactRow
          icon={<Phone size={18} />}
          label="Phone"
          value={contact.phone}
        />

        <ContactRow
          icon={<MapPin size={18} />}
          label="Location"
          value={contact.location}
        />

        <ContactRow
          icon={<Briefcase size={18} />}
          label="Availability"
          value={contact.availability}
          last
        />
      </section>

      {/* Looking For */}
      <section
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
          p-6
        "
      >
        <h2 className="font-medium">
          Looking For
        </h2>

        <ul className="mt-5 space-y-3">
          {contact.lookingFor.map((item) => (
            <li
              key={item}
              className="
                flex
                items-center
                gap-3
                text-white/70
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                "
              />

              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}