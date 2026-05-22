import {
  ArrowUpRight,
  Globe,
  Link,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "../ui/container";

const contacts = [
  {
    title: "Email",
    value: "mukesh@example.com",
    icon: Mail,
  },

  {
    title: "Phone",
    value: "+91 98765 43210",
    icon: Phone,
  },

  {
    title: "Location",
    value: "Punjab, India",
    icon: MapPin,
  },
];

const socials = [
  {
    title: "GitHub",
    icon: Globe,
  },

  {
    title: "LinkedIn",
    icon: Link,
  },
];

export default function Contact() {
  return (
    <section className="pb-16">
      <Container>
        
        {/* Main Container */}
        <div className="rounded-[36px] border border-gray-200 bg-white p-8 shadow-sm lg:p-12">
          
          <div className="grid gap-14 lg:grid-cols-2">
            
            {/* LEFT */}
            <div>
              
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Contact
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight text-gray-900">
                Let’s Talk.
              </h2>

              <p className="mt-6 max-w-md leading-8 text-gray-500">
                I'm currently open to full-time
                opportunities, freelance work and
                exciting collaborations.
              </p>

              {/* Button */}
              <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-red-600">
                Get In Touch
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-between">
              
              {/* Contact Items */}
              <div className="space-y-6">
                {contacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4"
                    >
                      
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                        <Icon
                          size={18}
                          className="text-red-500"
                        />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">
                          {item.title}
                        </p>

                        <p className="font-medium text-gray-900">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom */}
              <div className="mt-12 flex flex-col gap-6 border-t border-gray-200 pt-6 lg:flex-row lg:items-center lg:justify-between">
                
                {/* Socials */}
                <div className="flex items-center gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <button
                        key={social.title}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 transition hover:bg-gray-100"
                      >
                        <Icon
                          size={18}
                          className="text-gray-700"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-500">
                  © 2026 Mukesh Kumar
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
