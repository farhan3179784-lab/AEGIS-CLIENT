import React from "react";
import SolutionSection from "../Components/SolutionSection";
import MissionSection from "../Components/MissionSection";
import HowItWorks from "../Components/HowItWorks";
import WhoItsFor from "../Components/WhoItsFor";
import TrustSection from "../Components/TrustSection";
import CTA from "../Components/CTA";
import Topfooter from "../Components/Topfooter";
const App = () => {
  return (
    <>
      <SolutionSection />
      <MissionSection />
      <HowItWorks />
      <WhoItsFor/>
      <TrustSection />
      <CTA/>
      <Topfooter/>
    </>
  );
};

export default App;
