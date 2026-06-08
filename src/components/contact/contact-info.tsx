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
    <div className="space-y-6">
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
        "
      >
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
      </div>

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-5
        "
      >
        <h3 className="font-medium">
          Current Focus
        </h3>

        <ul
          className="
            mt-4
            space-y-2
            text-sm
            text-white/60
          "
        >
          <li>• Full Stack Development</li>
          <li>• Next.js & TypeScript</li>
          <li>• Laravel & PHP</li>
          <li>• Remote Opportunities</li>
        </ul>
      </div>
    </div>
  );
}