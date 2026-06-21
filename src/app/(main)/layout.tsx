import CursorEffect from "@/components/layout/cursor-effect";
import MainHeader from "@/components/layout/main-header";
import Footer from "@/components/layout/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />

      <main
        className="
          relative
          bg-black
        "
      >
         

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