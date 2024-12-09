import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import NavbarSection from "../components/NavbarSection";
import "../index.css";
import { ThemeProvider } from "@/components/theme-provider";
export const layoutColor = "";
function HomePage() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavbarSection />
        <main className="bg-[#D9D9D9] dark:bg-[#0D0D0D] dark:text-white  flex flex-col min-h-screen items-center ">
          <div className="w-full max-w-screen-lg px-6 ">
            <HeroSection />
            <FooterSection />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
