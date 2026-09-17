import HeroSection from "@/components/HeroSection";
import OurIntroduction from "@/components/OurIntroduction";
import PopularFoods from "@/components/PopularFoods";
import AgricultureMatters from "@/components/AgricultureMatters";
import RecentlyCompleted from "@/components/RecentlyCompleted";

import ModernAgriculture from "@/components/ModernAgriculture";
import FromTheBlog from "@/components/FromTheBlog";
import ContactUs from "@/components/ContactUs";

import Footer from "@/components/Footer";
import SectionMotion from "@/components/SectionMotion";
import ProductInquiryProvider from "@/components/ProductInquiryProvider";

export default function Home() {
  return (
    <ProductInquiryProvider>
      <main id="main" tabIndex={-1}>
      <SectionMotion />
      <HeroSection />
      <OurIntroduction />
      <PopularFoods />
      <AgricultureMatters />
      <RecentlyCompleted />

      <ModernAgriculture />
      <FromTheBlog />

      <ContactUs />

      <Footer />

      </main>
    </ProductInquiryProvider>
  );
}
