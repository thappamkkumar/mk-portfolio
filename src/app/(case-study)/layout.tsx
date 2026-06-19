 
import CursorEffect from "@/components/layout/cursor-effect";
import CaseStudyHeader from "@/components/case-study/case-study-header";
import Footer from "@/components/layout/footer";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CaseStudyHeader />
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