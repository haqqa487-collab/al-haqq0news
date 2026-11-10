import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";

export default function FrontLayout({ children }) {
  return (
    <>
      <Masthead />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
