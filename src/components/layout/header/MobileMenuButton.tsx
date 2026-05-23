import { Menu, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  isOpen,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden cursor-pointer"
    >
      {isOpen ? (
        <X size={22} />
      ) : (
        <Menu size={22} />
      )}
    </button>
  );
}
