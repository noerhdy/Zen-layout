import FooterSection from "../components/FooterSection";
import NavbarSection from "../components/NavbarSection";
import "../index.css";
import { ThemeProvider } from "@/components/theme-provider";

function LayoutRoot() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="bg-[#D9D9D9] dark:bg-[#0D0D0D] dark:text-white  flex flex-col min-h-screen items-center ">
          <div className="w-full max-w-screen-lg px-6 ">
            <NavbarSection />
            <FooterSection />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default LayoutRoot;
