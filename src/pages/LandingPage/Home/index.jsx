import BlackLabrator from "../../../assets/black-labrator.png";
import { Home } from "./home.styles";

export const HomeSection = () => {
  return (
    <Home id="home">
      <div>
        <Home.Title>Nutrição Personalizada para Cães e Gatos</Home.Title>
        <Home.CTAButton><span>Experimente</span></Home.CTAButton>
      </div>
      <Home.Image src={BlackLabrator} alt="" />
    </Home>
  );
};
