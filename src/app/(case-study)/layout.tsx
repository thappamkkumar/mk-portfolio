 
import CursorEffect from "@/components/layout/cursor-effect";
import SecondaryHeader from "@/components/layout/secondary-header";
import Footer from "@/components/layout/footer";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryHeader />
      <CursorEffect />
      <main
        className="
          relative
          bg-black
        "
      > 

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
      </main>
      <Footer />
    </>
  );
}