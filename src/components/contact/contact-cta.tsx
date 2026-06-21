import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { contact } from "@/data/contact";

export default function ContactCTA() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/2
        p-8
        md:p-12
      "
    >
      <div
        className="
          flex
          flex-col
          gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-emerald-400
            "
          >
            Let&apos;s Work Together
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-semibold
              tracking-tight
              md:text-4xl
            "
          >
            Ready to build something impactful?
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              leading-relaxed
              text-white/60
            "
          >
            I&apos;m currently available for full-time
            opportunities, freelance projects,
            and collaborations. If you have an
            idea, a role, or a product to build,
            I&apos;d be happy to discuss it.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`mailto:${contact.email}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-400
              px-5
              py-3
              font-medium
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-emerald-300
            "
          >
            Email Me

            <ArrowUpRight size={16} />
          </Link>

          {contact.resumeUrl && (
            <Link
              href={contact.resumeUrl}
              target="_blank"
              className="
                rounded-full
                border
                border-white/10
                px-5
                py-3
                text-white/70
                transition-all
                duration-300
                hover:border-emerald-400/20
                hover:bg-emerald-400/5
                hover:text-white
              "
            >
              View Resume
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}