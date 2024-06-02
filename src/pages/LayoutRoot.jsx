import FooterSection from "../components/FooterSection";
import NavbarSection from "../components/NavbarSection";
import "../index.css";
import { ThemeProvider } from "@/components/theme-provider";

function LayoutRoot() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavbarSection />
        <FooterSection />
      </ThemeProvider>
    </>
  );
}

export default LayoutRoot;
