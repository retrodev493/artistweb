import Bigbanner from "@/widgets/Bigbanner";
import DigitalPartner from "@/widgets/Digitalpartner";
import HeroSection from "@/widgets/Herosection";
import Ourteam from "@/widgets/OurTeam";
import Ourservices from "@/widgets/Ourservices";
import Workpage from "@/widgets/Works";

export default function Home() {
  return (
  <>
  <HeroSection/>
  {/* <Workpage/> */}
  <Ourteam/>
  <DigitalPartner/>
  <Bigbanner/>
  <Ourservices/>
  </>
  );
}
