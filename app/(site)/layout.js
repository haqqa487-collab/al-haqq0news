import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Masthead compact />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
