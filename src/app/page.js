import Bigbanner from "@/widgets/Bigbanner";
import CraftPage from "@/widgets/Craft";
import DigitalPartner from "@/widgets/Digitalpartner";
import HeroSection from "@/widgets/Herosection";
import Ourteam from "@/widgets/OurTeam";
import Ourservices from "@/widgets/Ourservices";
import Partners from "@/widgets/Partners";
import Workpage from "@/widgets/Works";

export default function Home() {
  return (
  <>
  <HeroSection/>
  {/* <Workpage/> */}
  <Ourteam/>
  <DigitalPartner/>
  <Bigbanner/>
  <Partners/>
  <CraftPage/>
  <Ourservices/>
  </>
  );
}
