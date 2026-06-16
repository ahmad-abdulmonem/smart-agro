import HeroSection from "@/components/HeroSection";
import OurIntroduction from "@/components/OurIntroduction";
import PopularFoods from "@/components/PopularFoods";
import AgricultureMatters from "@/components/AgricultureMatters";
import RecentlyCompleted from "@/components/RecentlyCompleted";
import Testimonials from "@/components/Testimonials";
import ModernAgriculture from "@/components/ModernAgriculture";
import FromTheBlog from "@/components/FromTheBlog";
import ContactUs from "@/components/ContactUs";
import Clients from "@/components/Clients";
import WeAreLeader from "@/components/WeAreLeader";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurIntroduction />
      <PopularFoods />
      <AgricultureMatters />
      <RecentlyCompleted />
      <Testimonials />
      <ModernAgriculture />
      <FromTheBlog />
      <ContactUs />
      <Clients />
      <WeAreLeader />
      <Footer />

    </main>
  );
}