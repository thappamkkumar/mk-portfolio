import Container from "../ui/container";
import Button from "../ui/button";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-6">
      <Container>
        <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
          
          {/* Logo */}
          <div>
            <h1 className="text-lg font-bold text-gray-900">
              MK.
            </h1>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-black"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button>Resume</Button>
        </div>
      </Container>
    </header>
  );
}
