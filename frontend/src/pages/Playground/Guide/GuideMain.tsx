import React, { useState } from "react";
import styles from "./GuideMain.module.css";
import bookimg from "/assets/guidebook.png";
import CocktailGuide from "@/components/Playground/DrinkGuide/CocktailGuide";
import WhiskeyGuide from "@/components/Playground/DrinkGuide/WhiskeyGuide";
import WineGuide from "@/components/Playground/DrinkGuide/WineGuide";
import KoreanGuide from "@/components/Playground/DrinkGuide/KoreanGuide";
import BeerGuide from "@/components/Playground/DrinkGuide/BeerGuide";
import { useNavigate } from "react-router-dom";

const GuideMain: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>("cocktail");
  const navigate = useNavigate();

  const handleButtonClick = (drinktype: string) => {
    navigate(`/playground/guide/${drinktype}`);
    setSelectedButton(drinktype);
  };
  return (
    <div className={`${styles[`container`]}`}>
      <div className={`${styles[`guide-header`]}`}>
        <img src={bookimg} className={`${styles[`book-img`]}`} />
        <h2 className={`${styles[`drink-guide`]}`}>입문자가이드</h2>
        <img src={bookimg} className={`${styles[`book-img`]}`} />
      </div>
      <div className={`${styles[`guide-select-btn-wrap`]}`}>
        <div className={`${styles[`three-btn`]}`}>
          <button
            className={`${styles[`guide-select-btn`]} ${
              selectedButton === "cocktail" ? styles[`guide-select-btn-active`] : ""
            }`}
            onClick={() => handleButtonClick("cocktail")}
          >
            칵테일
          </button>
          <button
            className={`${styles[`guide-select-btn`]} ${
              selectedButton === "whiskey" ? styles[`guide-select-btn-active`] : ""
            }`}
            onClick={() => handleButtonClick("whiskey")}
          >
            위스키
          </button>
          <button
            className={`${styles[`guide-select-btn`]} ${
              selectedButton === "wine" ? styles[`guide-select-btn-active`] : ""
            }`}
            onClick={() => handleButtonClick("wine")}
          >
            와인
          </button>
        </div>
        <div className={`${styles[`two-btn`]}`}>
          <button
            className={`${styles[`guide-select-btn`]} ${
              selectedButton === "korean" ? styles[`guide-select-btn-active`] : ""
            }`}
            onClick={() => handleButtonClick("korean")}
          >
            전통주
          </button>
          <button
            className={`${styles[`guide-select-btn`]} ${
              selectedButton === "beer" ? styles[`guide-select-btn-active`] : ""
            }`}
            onClick={() => handleButtonClick("beer")}
          >
            맥주
          </button>
        </div>
      </div>

      <div className={`${styles[`component-wrap`]}`}>
        {selectedButton === "cocktail" && <CocktailGuide />}
        {selectedButton === "whiskey" && <WhiskeyGuide />}
        {selectedButton === "wine" && <WineGuide />}
        {selectedButton === "korean" && <KoreanGuide />}
        {selectedButton === "beer" && <BeerGuide />}
      </div>
    </div>
  );
};
export default GuideMain;
