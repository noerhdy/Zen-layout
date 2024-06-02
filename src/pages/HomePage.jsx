import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import NavbarSection from "../components/NavbarSection";
import "../index.css";
import { ThemeProvider } from "@/components/theme-provider";
export const layoutColor = "bg-zinc-50 dark:bg-zinc-950 dark:text-white";
function HomePage() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavbarSection />
        <div className={`${layoutColor}`}>
          <HeroSection />
          <FooterSection />
        </div>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
