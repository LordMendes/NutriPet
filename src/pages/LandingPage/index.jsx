import { Navbar } from "../../Components/Navbar";
import { HomeSection } from "./Home";
import { LandingPageContainer } from "./landingPage.styles";

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Navbar />
      <HomeSection />
    </LandingPageContainer>
  );
};
