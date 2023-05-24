import React from "react";
import HomeThreeNavBar from "../HomeThree/HomeThreeNavBar/HomeThreeNavBar";
import HomeThreeHeroSection from "../HomeThree/HomeThreeHeroSection/HomeThreeHeroSection";
import Footer from "../../components/Shared/Footer";
import PatientLandingPageArea from "./PatientLandingPageArea/PatientLandingPageArea";
import HomeThreeAboutArea from "../HomeThree/HomeThreeAboutArea/HomeThreeAboutArea";

function PatientLandingPage() {
  return (
    <div>
      <HomeThreeNavBar />
      {/* <HomeThreeHeroSection /> */}
      <PatientLandingPageArea />
      <HomeThreeAboutArea />
      <Footer />
    </div>
  );
}

export default PatientLandingPage;
