import CursorEffect from "@/components/layout/cursor-effect";
import SiteBackground from "@/components/layout/site-background";
import TopNavbar from "@/components/layout/top-navbar";
import Footer from "@/components/layout/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavbar />

      <main
        className="
          relative
          bg-black
        "
      >
        <SiteBackground />

        <CursorEffect />

        <section
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-4
            pt-10
            pb-30
            md:px-6
          "
        >
          {children}
        </section>

        <Footer />
      </main>
    </>
  );
}