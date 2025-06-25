
import HeroSection from "./components/herosection";
import JobListings from "./components/joblisting";
import SkillsSection from "./components/demand-skill";
import TopCompanies from "./components/top_companies.jsx";
import CTASection from "./components/CTA";

export default function Home() {
  return (
    <div >
      
       
       <HeroSection/>
       <JobListings/>
       <SkillsSection/>
       <TopCompanies/>
       <CTASection/>
       
      
     
    </div>
  );
}
