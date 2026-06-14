 
import { ArrowUpRight } from "lucide-react";

interface ContactLinkCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ContactLinkCard({
  title,
  description,
  href,
}: ContactLinkCardProps) {
  const className = `
    group
    rounded-2xl
    border
    border-white/10
    bg-white/2
    p-6
    transition-all
    hover:border-emerald-500/30
  `;
 

  const content = (
    <div className="flex items-start justify-between">
      <div>
        <h3 className="font-medium">{title}</h3>

        <p className="mt-2 text-sm text-white/60">{description}</p>
      </div>

      <ArrowUpRight
        size={18}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </div>
  );

 
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  
}